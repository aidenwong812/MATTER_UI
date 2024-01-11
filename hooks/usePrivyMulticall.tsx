import { useState } from "react"
import { BigNumber } from "ethers"
import { CHAIN_ID, MULTICALL_3_ADDRESS } from "../lib/consts"
import multicallAbi from "../lib/abi/multicall.json"
import handleTxError from "../lib/handleTxError"
import usePrivySendTransaction from "./usePrivySendTransaction"

const usePrivyMulticall = () => {
  const [error, setError] = useState<Error | null>(null)
  const { sendTransaction } = usePrivySendTransaction()

  const aggregate3Value = async (calls) => {
    console.log("sweets calls", calls)
    try {
      const publicSalePrice = "0"
      const response = await sendTransaction(
        MULTICALL_3_ADDRESS,
        CHAIN_ID,
        multicallAbi,
        "aggregate3Value",
        [calls],
        BigNumber.from(publicSalePrice).toHexString(),
        "Securely Pay on Oasis",
        "Pay with Crypto",
      )
      return response
    } catch (err) {
      console.log("SWEETS MULTICALL ERROR", err)
      handleTxError(err)
      setError(err)

      return { error: err }
    }
  }

  return { error, aggregate3Value }
}

export default usePrivyMulticall
