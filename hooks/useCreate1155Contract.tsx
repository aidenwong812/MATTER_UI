import { usePrivy } from "@privy-io/react-auth"
import { store } from "onchain-magic"
import abi from "@/lib/abi/abi-Zora1155CreatorProxy.json"
import handleTxError from "@/lib/handleTxError"
import usePrivySendTransaction from "@/hooks/usePrivySendTransaction"
import getZora1155ProxyAddress from "@/lib/zora/getZora1155ProxyAddress"
import { CHAIN_ID } from "@/lib/consts"
import useConnectedWallet from "@/hooks/useConnectedWallet"
import getCreatedContractAddress from "@/lib/getCreatedContractAddress"
import getSetupActions from "@/lib/zora/getSetupActions"

const useCreate1155Contract = () => {
  const { authenticated } = usePrivy()
  const { sendTransaction } = usePrivySendTransaction()
  const { connectedWallet } = useConnectedWallet()

  const create1155Contract = async (
    cover,
    chainId = CHAIN_ID,
    title = "",
    description = "",
    pricePerToken = 100000000,
    totalSupply = "1000000",
  ) => {
    try {
      const ipfsCid = await store(cover, title, description, connectedWallet)
      const setupActions = getSetupActions(connectedWallet, ipfsCid, pricePerToken, totalSupply)
      const args = [
        `ipfs://${ipfsCid}`,
        title,
        {
          royaltyRecipient: connectedWallet,
          royaltyMintSchedule: 0,
          royaltyBPS: 500,
        },
        connectedWallet,
        setupActions,
      ]

      if (authenticated) {
        const factoryAddress = getZora1155ProxyAddress(chainId)

        const response = await sendTransaction(
          factoryAddress,
          chainId,
          abi,
          "createContract",
          args,
          undefined,
          "Create",
          "Matter",
        )

        const { error } = response as any
        if (error) return { error: true }

        const contractAddress = getCreatedContractAddress(response.logs)
        return {
          ipfs: `ipfs://${ipfsCid}`,
          contractAddress,
        }
      }

      return { error: true }
    } catch (err) {
      handleTxError(err)
      return { error: err }
    }
  }

  return {
    create1155Contract,
  }
}

export default useCreate1155Contract
