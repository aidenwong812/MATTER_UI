import { parseEther } from "ethers/lib/utils"
import handleTxError from "../../lib/handleTxError"
import erc6551AccountAbi from "../../lib/abi/erc6551-account.json"
import usePrepareSmartWallet from "./usePrepareSmartWallet"
import useConnectedWallet from "../useConnectedWallet"
import usePrivySendTransaction from "../usePrivySendTransaction"
import { CHAIN_ID } from "../../lib/consts"

const useEthTransfer = () => {
  const { connectedWallet } = useConnectedWallet()
  const { prepare } = usePrepareSmartWallet()
  const { sendTransaction } = usePrivySendTransaction()

  const transferEthFromERC6551Account = async (
    tokenBoundAccount: string,
    value: number,
    tokenId: number,
  ) => {
    const ready = await prepare(tokenBoundAccount, tokenId)
    if (!ready) return false

    try {
      const wei = parseEther(value.toString()).toString()
      const receipt = await sendTransaction(
        tokenBoundAccount,
        CHAIN_ID,
        erc6551AccountAbi,
        "executeCall",
        [connectedWallet, wei, "0x"],
      )

      return receipt
    } catch (err) {
      handleTxError(err)
      return { err }
    }
  }

  return {
    transferEthFromERC6551Account,
  }
}

export default useEthTransfer
