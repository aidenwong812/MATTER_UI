import axios from "axios"
import getAlchemyRpcUrl from "./getAlchemyRpcUrl"

// eslint-disable-next-line camelcase
export const ethGetLogs = async (chainId, contractAddress, topics) => {
  const endpoint = getAlchemyRpcUrl(chainId)

  const payload = {
    id: 0,
    jsonrpc: "2.0",
    method: "eth_getLogs",
    params: [
      {
        fromBlock: "0x1",
        toBlock: "0x8b422e",
        address: contractAddress,
        topics,
      },
    ],
  }

  try {
    const response = await axios.post(endpoint, payload)

    return response.data.result
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("ZIAD Error fetching logs:", error)
    return []
  }
}
