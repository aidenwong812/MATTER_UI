import { Contract } from "ethers"
import { useMemo, useState } from "react"
import usdcAbi from "../lib/abi/usdc.json"
import { useEthersSigner } from "./useEthersSigner"
import { SPLIT_ADDRESS, USDC_ADDRESS, USDC_SCALE } from "../lib/consts"

const useUsdc = () => {
  const signer = useEthersSigner()
  const [amount, setAmount] = useState()

  const usdcContract = useMemo(() => new Contract(USDC_ADDRESS, usdcAbi, signer), [signer])

  const sendUsdcToSplit = async () => {
    const weiAmount = USDC_SCALE * parseFloat(amount)
    const tx = await usdcContract.transfer(SPLIT_ADDRESS, weiAmount)
    await tx.wait()
  }

  return {
    amount,
    sendUsdcToSplit,
    setAmount,
  }
}

export default useUsdc
