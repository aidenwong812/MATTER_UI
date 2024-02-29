import axios from "axios"
import { ALCHEMY_ENDPOINT } from "./consts"
import { AlchemyParamsType } from "./type"

const getAssetTransfers = async (transferType: string, wallet: string) => {
  const id = 1
  const jsonrpc = "2.0"
  const method = "alchemy_getAssetTransfers"
  const params: AlchemyParamsType = [
    {
      fromBlock: "0x0",
      toBlock: "latest",
      category: ["external", "erc20", "erc721", "erc1155", "specialnft"],
      withMetadata: true,
      excludeZeroValue: true,
    },
  ]
  if (transferType === "payout") {
    params[0].fromAddress = wallet
  }
  if (transferType === "sales") {
    params[0].toAddress = wallet
  }

  const data = {
    id,
    jsonrpc,
    method,
    params,
  }

  try {
    const transactions = await axios.post(ALCHEMY_ENDPOINT, data)
    return transactions.data?.result?.transfers
  } catch {
    return []
  }
}

export default getAssetTransfers
