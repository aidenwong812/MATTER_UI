import { utils } from "ethers"
import { ethGetLogs } from "../alchemy/eth_getLogs"

export const get1155Minters = async (collectionAddress, tokenId, chainId) => {
  if (!collectionAddress) return []

  const eventSignature = utils.id("UpdatedPermissions(uint256,address,uint256)")
  const paddedTokenId = tokenId && utils.hexZeroPad(`0x${tokenId.toString(16)}`, 32)
  const MINTER_PERMISSION_BITS = 4
  const paddedFour = utils.hexZeroPad(`0x${MINTER_PERMISSION_BITS.toString(16)}`, 32)
  const topics = [eventSignature, paddedTokenId, null, paddedFour]
  const response = await ethGetLogs(chainId, collectionAddress, topics)
  const results = response?.map((log) => `0x${log.topics[2].slice(26)}`)
  return results.reverse()
}
