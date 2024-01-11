import { usePrivy } from "@privy-io/react-auth"
import { BigNumber } from "ethers"
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
    buttonText = "",
    customSuccessMessage = null,
  ) => {
    const data = new Interface(abi).encodeFunctionData(functionName, args)
    const unsignedTx = {
      to,
      chainId,
      data,
      value,
    }

    const uiConfig = {
      header: title,
      description,
      buttonText,
    }
    const txReceipt = await privySendTransaction(unsignedTx, uiConfig)

    const successMessage = customSuccessMessage || "Success!"
    toast.success(successMessage)

    return txReceipt.transactionHash
  }

  return {
    sendTransaction,
  }
}

export default usePrivySendTransaction
