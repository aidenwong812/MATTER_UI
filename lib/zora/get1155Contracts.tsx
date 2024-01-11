import { toUtf8String } from "ethers/lib/utils"
import { ethGetLogs } from "../alchemy/eth_getLogs"
import { SETUP_1155_EVENT_SIGNATURE } from "../consts"
import getZora1155ProxyAddress from "./getZora1155ProxyAddress"

export const get1155Contracts = async (chainId) => {
  const topics = [SETUP_1155_EVENT_SIGNATURE]
  const proxyAddress = getZora1155ProxyAddress(chainId)
  const response = await ethGetLogs(chainId, proxyAddress, topics)
  const createdContracts = response.map((log) => {
    const newName = log.data.slice(log.data.length - 64, log.data.length)
    const trimmedHex = newName.replace(/00+$/, "")
    let name = ""
    try {
      name = toUtf8String(`0x${trimmedHex.padStart()}`).substring(0)
      // eslint-disable-next-line no-empty
    } catch (error) {}

    return {
      newContract: `0x${log.topics[1].slice(26)}`,
      creator: `0x${log.topics[2].slice(26)}`,
      contractName: name,
    }
  })
  return createdContracts
}
