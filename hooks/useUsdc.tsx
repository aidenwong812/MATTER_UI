import { CHAIN_ID, MINTER_ADDRESS, USDC_ADDRESS } from "@/lib/consts"
import { BigNumber, Contract } from "ethers"
import { getDefaultProvider } from "onchain-magic"
import { useEffect, useMemo, useState } from "react"
import { erc20Abi, maxUint256 } from "viem"
import useConnectedWallet from "./useConnectedWallet"
import usePrivySendTransaction from "./usePrivySendTransaction"

const useUsdc = () => {
  const { connectedWallet } = useConnectedWallet()
  const { sendTransaction } = usePrivySendTransaction()
  const [balance, setBalance] = useState(null as BigNumber)
  const [minterAllowance, setMinterAllowance] = useState(null)
  const provider = getDefaultProvider(CHAIN_ID)
  const usdc = useMemo(() => new Contract(USDC_ADDRESS, erc20Abi, provider), [provider])

  const approveWithPrivy = async () => {
    const args = [MINTER_ADDRESS, maxUint256]
    const response = await sendTransaction(
      USDC_ADDRESS,
      CHAIN_ID,
      erc20Abi,
      "approve",
      args,
      BigNumber.from("0").toHexString(),
      "USDC Approval",
      "approve",
    )
    return response
  }

  const payoutWithPrivy = async (address: string) => {
    const args = [address, balance]
    const response = await sendTransaction(
      USDC_ADDRESS,
      CHAIN_ID,
      erc20Abi,
      "transfer",
      args,
      BigNumber.from("0").toHexString(),
      "USDC Payout",
      "Payout",
    )
    return response
  }

  useEffect(() => {
    const init = async () => {
      const balanceResponse = await usdc.balanceOf(connectedWallet)
      setBalance(balanceResponse)
      const allowanceResponse = await usdc.allowance(connectedWallet, MINTER_ADDRESS)
      setMinterAllowance(allowanceResponse)
    }
    if (!connectedWallet) return
    init()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connectedWallet])

  return { approveWithPrivy, payoutWithPrivy, balance, minterAllowance }
}

export default useUsdc
