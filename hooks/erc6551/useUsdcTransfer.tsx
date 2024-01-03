import { useMemo } from "react"
import { Contract, utils } from "ethers"
import { toast } from "react-toastify"
import { useEthersSigner } from "../useEthersSigner"
import abi from "../../lib/abi/erc6551-account.json"
import usdcAbi from "../../lib/abi/usdc.json"
import handleTxError from "../../lib/handleTxError"
import { CHAIN_ID, USDC_ADDRESS } from "../../lib/consts"
import useConnectedWallet from "../useConnectedWallet"
import usePrivySendTransaction from "../usePrivySendTransaction"
import usePrepareSmartWallet from "./usePrepareSmartWallet"

const useUsdcTransfer = () => {
  const signer = useEthersSigner()
  const { connectedWallet } = useConnectedWallet()
  const usdcContract = useMemo(() => new Contract(USDC_ADDRESS, usdcAbi, signer), [signer])
  const { sendTransaction } = usePrivySendTransaction()
  const { prepare } = usePrepareSmartWallet()

  const transferUsdcFromERC6551Account = async (
    tokenBoundAccount: string,
    value: number,
    tokenId: number,
  ) => {
    const ready = await prepare(tokenBoundAccount, tokenId)
    if (!ready) return false
    try {
      // Check the current allowance of the tokenBoundAccount
      const currentAllowance = await usdcContract.allowance(tokenBoundAccount, connectedWallet)
      const requiredValue = utils.parseUnits(value.toString(), 6)
      // If the allowance is less than the required amount, approve it first
      if (currentAllowance.lt(requiredValue)) {
        const approveData = usdcContract.interface.encodeFunctionData("approve", [
          connectedWallet,
          requiredValue,
        ])
        await sendTransaction(
          tokenBoundAccount,
          CHAIN_ID,
          abi,
          "executeCall",
          [USDC_ADDRESS, 0, approveData],
          "Approve Sending of USD",
        )
      }

      const transferData = usdcContract.interface.encodeFunctionData("transfer", [
        connectedWallet,
        utils.parseUnits(value.toString(), 6),
      ])
      const receipt = await sendTransaction(
        tokenBoundAccount,
        CHAIN_ID,
        abi,
        "executeCall",
        [USDC_ADDRESS, 0, transferData],
        "Withdrawing USD",
      )
      toast.success("claimed rewards!")
      return receipt
    } catch (err) {
      handleTxError(err)
      return { err }
    }
  }

  return {
    transferUsdcFromERC6551Account,
  }
}

export default useUsdcTransfer
