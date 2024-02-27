import { useState, useEffect } from "react"
import getAssetTransfers from "@/lib/getAssetTransfers"

const usePayoutActivity = (wallet: string) => {
  const [payoutActivity, setPayoutActivity] = useState([])

  useEffect(() => {
    const init = async () => {
      if (wallet) {
        const transactions = await getAssetTransfers(wallet)
        setPayoutActivity(transactions)
      }
    }

    init()
  }, [])

  return {
    payoutActivity,
  }
}

export default usePayoutActivity
