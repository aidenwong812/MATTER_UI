import axios from "axios"
import { ALCHEMY_ENDPOINT } from "./consts"

const getAssetTransfers = async (transferType: string, wallet: string) => {
  const id = 1
  const jsonrpc = "2.0"
  const method = "alchemy_getAssetTransfers"
  const params =
    transferType === "payout"
      ? [
          {
            fromBlock: "0x0",
            toBlock: "latest",
            fromAddress: wallet,
            category: ["external", "erc20", "erc721", "erc1155", "specialnft"],
            withMetadata: true,
            excludeZeroValue: true,
          },
        ]
      : [
          {
            fromBlock: "0x0",
            toBlock: "latest",
            toAddress: wallet,
            category: ["external", "erc20", "erc721", "erc1155", "specialnft"],
            withMetadata: true,
            excludeZeroValue: true,
          },
        ]

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
