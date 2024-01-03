import { useMemo } from "react"
import { Contract } from "ethers"
import { useAccount } from "wagmi"
import getPercentAllocations from "../lib/0xSplits/getPercentAllocations"
import getSortedAddresses from "../lib/0xSplits/getSortedAddresses"
import useSmartWallets from "./useSmartWallets"
import { SPLIT_ADDRESS, SPLIT_MAIN_ADDRESS, USDC_ADDRESS } from "../lib/consts"
import splitMainAbi from "../lib/abi/splits-main.json"
import { useEthersSigner } from "./useEthersSigner"

const useUpdateSplit = () => {
  const { smartWallets } = useSmartWallets()
  const signer = useEthersSigner()
  const splitMainContract = useMemo(
    () => new Contract(SPLIT_MAIN_ADDRESS, splitMainAbi, signer),
    [signer],
  )
  const { address } = useAccount()

  const updateAndDistributeERC20 = async () => {
    const sorted = getSortedAddresses(smartWallets)
    const percentAllocations = getPercentAllocations(sorted.length)
    const distributorFee = 0
    const tx = await splitMainContract.updateAndDistributeERC20(
      SPLIT_ADDRESS,
      USDC_ADDRESS,
      sorted,
      percentAllocations,
      distributorFee,
      address,
    )
    await tx.wait()
  }

  return { updateAndDistributeERC20, smartWallets }
}

export default useUpdateSplit
