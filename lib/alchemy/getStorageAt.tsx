import axios from "axios"
import getAlchemyRpcUrl from "./getAlchemyRpcUrl"
import { CHAIN_ID } from "../consts"

const getStorageAt = async (smartWalletAddress: string, index: any, blockTag = "latest") => {
  const url = getAlchemyRpcUrl(CHAIN_ID)

  const requestData = {
    id: 0,
    jsonrpc: "2.0",
    method: "eth_getStorageAt",
    params: [smartWalletAddress, index, blockTag],
  }
  const { data } = await axios.post(url, requestData)
  return data.result
}

export default getStorageAt
