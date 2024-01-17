import { BigNumber, Contract } from "ethers"
import { usePrivy } from "@privy-io/react-auth"
import abi from "../lib/abi/abi-ERC1155Drop.json"
import handleTxError from "../lib/handleTxError"
import usePrivySendTransaction from "./usePrivySendTransaction"
import getDefaultProvider from "../lib/getDefaultProvider"
import getSalesConfig from "../lib/zora/getSalesConfig"
import { store } from "../lib/ipfs"
import useConnectedWallet from "./useConnectedWallet"
import { CHAIN_ID } from "../lib/consts"

const useCreate1155Token = () => {
  const { authenticated } = usePrivy()
  const { sendTransaction } = usePrivySendTransaction()
  const { connectedWallet } = useConnectedWallet()

  const create1155Token = async (
    collectionAddress,
    title,
    cover,
    description,
    animationFile,
    chainId = CHAIN_ID,
  ) => {
    try {
      const file = cover || animationFile

      if (!file || !title || !collectionAddress || !connectedWallet) return { error: "error" }

      const contract = new Contract(collectionAddress, abi, getDefaultProvider(chainId))

      const nextTokenId = await contract.nextTokenId()

      const data = getSalesConfig(nextTokenId, connectedWallet)
      const callSaleArgs = [nextTokenId, process.env.NEXT_PUBLIC_FIXED_PRICE_SALE_STRATEGY, data]

      const maxUint256 = BigNumber.from(
        "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
      )
      const formattedDescription = description.replace(/\n/g, "\\n")
      const ipfs = await store(file, title, formattedDescription, connectedWallet)
      const setupNewTokenArgs = [`ipfs://${ipfs}`, maxUint256]

      const calls = [
        contract.interface.encodeFunctionData("setupNewToken", setupNewTokenArgs),
        contract.interface.encodeFunctionData("callSale", callSaleArgs),
      ]

      if (authenticated) {
        const response: any = await sendTransaction(collectionAddress, chainId, abi, "multicall", [
          calls,
        ])
        return { error: response?.error }
      }

      return `ipfs://${ipfs}`
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
