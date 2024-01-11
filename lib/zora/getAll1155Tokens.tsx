import { ethGetLogsBatch } from "../alchemy/eth_getLogsBatch"
import { SETUP_1155_TOKEN_EVENT_SIGNATURE } from "../consts"
import getMapped1155TokenBatch from "./getMapped1155TokenBatch"

export const getAll1155Tokens = async (all1155Contracts, chainId) => {
  const batchRequests = all1155Contracts.map((contract) => ({
    contractAddress: contract.contractAddress,
    topics: [SETUP_1155_TOKEN_EVENT_SIGNATURE],
  }))
  const batchResults = await ethGetLogsBatch(chainId, batchRequests)
  const drops = getMapped1155TokenBatch(batchResults, all1155Contracts)
  return drops
}
