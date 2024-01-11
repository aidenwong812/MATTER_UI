import { BigNumber, Contract } from "ethers"
import { usePrivy } from "@privy-io/react-auth"
import abi from "../lib/abi/abi-ERC1155Drop.json"
import handleTxError from "../lib/handleTxError"
import usePrivySendTransaction from "./usePrivySendTransaction"
import getDefaultProvider from "../lib/getDefaultProvider"
import getSalesConfig from "../lib/zora/getSalesConfig"
import { store } from "../lib/ipfs"
import { useDeploy } from "../providers/DeployProvider"
import { useCollection } from "../providers/CollectionProvider"

const useCreate1155Token = () => {
  const { authenticated } = usePrivy()
  const { sendTransaction } = usePrivySendTransaction()
  const { title, cover, description, animationFile, fundsRecipient } = useDeploy()
  const { selectedDrop } = useCollection()

  const create1155Token = async (chainId) => {
    try {
      const file = cover || animationFile
      const dropAddress = selectedDrop?.value

      if (!file || !title || !dropAddress || !fundsRecipient) return

      const contract = new Contract(dropAddress, abi, getDefaultProvider(chainId))

      const nextTokenId = await contract.nextTokenId()

      const data = getSalesConfig(nextTokenId, fundsRecipient)
      const callSaleArgs = [nextTokenId, process.env.NEXT_PUBLIC_FIXED_PRICE_SALE_STRATEGY, data]

      const maxUint256 = BigNumber.from(
        "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
      )
      const formattedDescription = description.replace(/\n/g, "\\n")
      const ipfs = await store(file, title, formattedDescription, fundsRecipient)
      const setupNewTokenArgs = [`ipfs://${ipfs}`, maxUint256]

      const calls = [
        contract.interface.encodeFunctionData("setupNewToken", setupNewTokenArgs),
        contract.interface.encodeFunctionData("callSale", callSaleArgs),
      ]

      if (authenticated) {
        const response: any = await sendTransaction(dropAddress, chainId, abi, "multicall", [calls])
        return { error: response?.error }
      }

      return true
    } catch (err) {
      handleTxError(err)
      return { error: err }
    }
  }

  return {
    create1155Token,
  }
}

export default useCreate1155Token
