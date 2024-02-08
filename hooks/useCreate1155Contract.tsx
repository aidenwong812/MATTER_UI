import { usePrivy } from "@privy-io/react-auth"
import { Interface } from "ethers/lib/utils"
import abi from "../lib/abi/abi-Zora1155CreatorProxy.json"
import dropAbi from "../lib/abi/abi-ERC1155Drop.json"
import handleTxError from "../lib/handleTxError"
import usePrivySendTransaction from "./usePrivySendTransaction"
import { store } from "onchain-magic"
import getZora1155ProxyAddress from "../lib/zora/getZora1155ProxyAddress"
import { CHAIN_ID } from "../lib/consts"
import useConnectedWallet from "./useConnectedWallet"
import getCreatedContractAddress from "../lib/getCreatedContractAddress"

const useCreate1155Contract = () => {
  const { authenticated } = usePrivy()
  const { sendTransaction } = usePrivySendTransaction()
  const { connectedWallet } = useConnectedWallet()

  const create1155Contract = async (chainId = CHAIN_ID, cover, title, description) => {
    try {
      const ipfsCid = await store(cover, title, description, connectedWallet)
      const adminPermissionArgs = [0, connectedWallet, 2]
      const minterPermissionArgs = [0, process.env.NEXT_PUBLIC_FIXED_PRICE_SALE_STRATEGY, 4]
      const minterPermissionCall = new Interface(dropAbi).encodeFunctionData(
        "addPermission",
        minterPermissionArgs,
      )
      const adminPermissionCall = new Interface(dropAbi).encodeFunctionData(
        "addPermission",
        adminPermissionArgs,
      )
      const setupActions = [adminPermissionCall, minterPermissionCall]

      const args = [
        `ipfs://${ipfsCid}`,
        title,
        {
          royaltyRecipient: "0x0000000000000000000000000000000000000000",
          royaltyMintSchedule: 0,
          royaltyBPS: 0,
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
        if (error) return

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
