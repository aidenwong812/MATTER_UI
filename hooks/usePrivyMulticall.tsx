import { useState } from "react"
import { BigNumber } from "ethers"
import { CHAIN_ID, GAS_LIMIT_CHECKOUT_PER_ITEM, MULTICALL_3_ADDRESS } from "../lib/consts"
import multicallAbi from "../lib/abi/multicall.json"
import handleTxError from "../lib/handleTxError"
import usePrivySendTransaction from "./usePrivySendTransaction"

const usePrivyMulticall = () => {
  const [error, setError] = useState<Error | null>(null)
  const { sendTransaction } = usePrivySendTransaction()

  const aggregate3Value = async (calls, msgValueString = "0") => {
    try {
      const response = await sendTransaction(
        MULTICALL_3_ADDRESS,
        CHAIN_ID,
        multicallAbi,
        "aggregate3Value",
        [calls],
        BigNumber.from(msgValueString).toHexString(),
        "Securely Pay on Matter",
        "Pay with Crypto",
        BigNumber.from(GAS_LIMIT_CHECKOUT_PER_ITEM).mul(BigNumber.from(calls.length)).toHexString(),
      )
      return response
    } catch (err) {
      handleTxError(err)
      setError(err)
      return { error: err }
    }
  }

  return { error, aggregate3Value }
}

export default usePrivyMulticall
