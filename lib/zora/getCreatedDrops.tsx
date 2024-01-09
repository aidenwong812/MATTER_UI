import { utils } from "ethers"
import getZoraNFTCreatorProxyAddress from "./getZoraNFTCreatorProxyAddress"
import { ethGetLogs } from "../alchemy/eth_getLogs"

export const getCreatedDrops = async (chainId) => {
  const eventSignature = utils.id("CreatedDrop(address,address,uint256)")
  const topics = [eventSignature]
  const response = await ethGetLogs(chainId, getZoraNFTCreatorProxyAddress(chainId), topics)
  const createdDrops = response.map((log) => ({
    contractAddress: `0x${log.topics[2].slice(26)}`,
    blockNumber: parseInt(log.blockNumber, 16),
    type: 721,
    uri: null,
  }))
  return createdDrops.reverse()
}
