import axios from "axios"
import getAlchemyRpcUrl from "./getAlchemyRpcUrl"

export const ethGetBlocksBatch = async (chainId, hashes) => {
  const endpoint = getAlchemyRpcUrl(chainId)

  const batchPayload = hashes.map((hash, index) => ({
    id: index,
    jsonrpc: "2.0",
    method: "eth_getBlockByHash",
    params: [hash, true],
  }))

  try {
    const response = await axios.post(endpoint, batchPayload)
    const batchedLogs = response.data
    return batchedLogs.map((res) => res.result)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error fetching logs in batch:", error)
    return []
  }
}
