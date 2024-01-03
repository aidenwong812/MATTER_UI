import { Contract } from "ethers"
import { useMemo } from "react"
import { Interface } from "ethers/lib/utils"
import { MULTICALL_ADDRESS, SPLIT_MAIN_ADDRESS } from "../lib/consts"
import multicallAbi from "../lib/abi/multicall.json"
import splitAbi from "../lib/abi/splits-main.json"
import { useEthersSigner } from "./useEthersSigner"
import useCheckNetwork from "./useCheckNetwork"

const useWithdrawForAll = () => {
  const { checkNetwork } = useCheckNetwork()
  const signer = useEthersSigner()
  const multicallContract = useMemo(
    () => new Contract(MULTICALL_ADDRESS, multicallAbi, signer),
    [signer],
  )
  const withdrawForAll = async (addresses) => {
    if (checkNetwork()) {
      const calls = []
      for (let i = 0; i < addresses.length; i += 1) {
        const withdrawData = new Interface(splitAbi).encodeFunctionData("withdraw", [
          addresses[i],
          0,
          [process.env.NEXT_PUBLIC_USDC],
        ])
        calls.push({
          target: SPLIT_MAIN_ADDRESS,
          value: 0,
          allowFailure: false,
          callData: withdrawData,
        })
      }

      const tx = await multicallContract.aggregate(calls)
      await tx.wait()
    }
  }

  return { withdrawForAll }
}

export default useWithdrawForAll
