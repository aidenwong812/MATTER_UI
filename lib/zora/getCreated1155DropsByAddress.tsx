import { BigNumber, utils } from "ethers"
import { toUtf8String } from "ethers/lib/utils"
import { ethGetLogs } from "../alchemy/eth_getLogs"
import getZora1155ProxyAddress from "./getZora1155ProxyAddress"
import { SETUP_1155_EVENT_SIGNATURE } from "../consts"
import { ethGetBlocksBatch } from "../alchemy/eth_getBlocksBatch"

export const getCreated1155DropsByAddress = async (creatorAddress, chainId) => {
  // Pad the creatorAddress
  const paddedWalletAddress = utils.hexZeroPad(creatorAddress, 32)

  // Specify the topics to filter the logs
  const topics = [SETUP_1155_EVENT_SIGNATURE, null, paddedWalletAddress, null]

  // Call ethGetLogs to get the event logs
  const proxyAddress = getZora1155ProxyAddress(chainId)
  const response = await ethGetLogs(chainId, proxyAddress, topics)
  // Extract and return the created contract addresses from the logs

  const hashes = response.map((log) => log.blockHash)
  const blocks = await ethGetBlocksBatch(chainId, hashes)

  const createdContracts = response.map((log, i) => {
    const timestamp = blocks[i]?.timestamp ? BigNumber.from(blocks[i].timestamp).toNumber() : 0
    const createdAt = timestamp * 1000

    const address = `0x${log.topics[1].slice(26)}`

    const newURIHex = log.data.slice(64 * 6, 64 * 9 + 1)
    let trimmedHex = newURIHex.replace(/00+$/, "") // trim the zeros from the right
    const uri = toUtf8String(`0x${trimmedHex}`).substring(1)
    const newName = log.data.slice(log.data.length - 64, log.data.length)
    trimmedHex = newName.replace(/00+$/, "")
    const name = toUtf8String(`0x${trimmedHex}`).substring(0)

    return {
      address,
      uri,
      name,
      createdAt,
      chainId,
    }
  })

  return createdContracts.reverse()
}
