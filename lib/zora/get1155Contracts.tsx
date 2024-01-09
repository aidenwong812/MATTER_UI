import { ethGetLogs } from "../alchemy/eth_getLogs"
import { SETUP_1155_EVENT_SIGNATURE } from "../consts"
import getZora1155ProxyAddress from "./getZora1155ProxyAddress"

export const get1155Contracts = async (chainId) => {
  const topics = [SETUP_1155_EVENT_SIGNATURE]
  const proxyAddress = getZora1155ProxyAddress(chainId)
  const response = await ethGetLogs(chainId, proxyAddress, topics)
  const createdContracts = response.map((log) => ({
    newContract: `0x${log.topics[1].slice(26)}`,
    creator: `0x${log.topics[2].slice(26)}`,
  }))
  return createdContracts
}
