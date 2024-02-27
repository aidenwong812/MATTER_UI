import { useState, useEffect } from "react"
import axios from "axios"
import { ALCHEMY_ENDPOINT } from "@/lib/consts"

const usePayoutActivity = (wallets) => {
  const [payoutActivity, setPayoutActivity] = useState([])

  useEffect(() => {
    const init = async () => {
      if (wallets) {
        const id = 1
        const jsonrpc = "2.0"
        const method = "alchemy_getAssetTransfers"
        const params = [
          {
            fromBlock: "0x0",
            toBlock: "latest",
            fromAddress: wallets[0].address,
            // toAddress: wallets[0].address,
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

        const transactions = await axios.post(ALCHEMY_ENDPOINT, data)
        setPayoutActivity(transactions.data?.result?.transfers)
      }
    }

    init()
  }, [])

  return {
    payoutActivity,
  }
}

export default usePayoutActivity
