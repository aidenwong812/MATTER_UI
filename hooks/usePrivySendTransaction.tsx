import { BigNumber } from "ethers"
import { UnsignedTransactionRequest, usePrivy } from "@privy-io/react-auth"
import { Interface } from "ethers/lib/utils"
import { toast } from "react-toastify"

const usePrivySendTransaction = () => {
  const { sendTransaction: privySendTransaction } = usePrivy()

  const sendTransaction = async (
    to,
    chainId,
    abi,
    functionName,
    args,
    value = BigNumber.from("0").toHexString(),
    title = "",
    description = "",
    gasLimit = null,
  ) => {
    const data = new Interface(abi).encodeFunctionData(functionName, args)
    const unsignedTx = {
      to,
      chainId,
      data,
      value,
    } as UnsignedTransactionRequest
    if (gasLimit) {
      unsignedTx.gasLimit = gasLimit
    }

    const uiConfig = {
      header: title,
      description,
    }
    const txReceipt = await privySendTransaction(unsignedTx, uiConfig)

    toast.success("Success!")

    return txReceipt.transactionHash
  }

  return {
    sendTransaction,
  }
}

export default usePrivySendTransaction
