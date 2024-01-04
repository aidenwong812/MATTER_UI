import { usePrivy } from "@privy-io/react-auth"
import { Interface } from "ethers/lib/utils"

const usePrivySendTransaction = () => {
  const { sendTransaction: privySendTransaction } = usePrivy()

  const sendTransaction = async (
    to,
    chainId,
    abi,
    functionName,
    args,
    value = "0",
    description = "",
  ) => {
    const data = new Interface(abi).encodeFunctionData(functionName, args)
    const unsignedTx = {
      to,
      chainId,
      data,
      value,
    }

    const uiConfig = {
      header: "OASIS",
      description,
      buttonText: "Sign",
    }
    const txReceipt = await privySendTransaction(unsignedTx, uiConfig)
    return txReceipt.transactionHash
  }

  return {
    sendTransaction,
  }
}

export default usePrivySendTransaction
