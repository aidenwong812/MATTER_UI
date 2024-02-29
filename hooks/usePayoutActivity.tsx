import { useState, useEffect } from "react"
import getAssetTransfers from "@/lib/getAssetTransfers"

const usePayoutActivity = (wallet: string) => {
  const [payoutActivity, setPayoutActivity] = useState([])

  useEffect(() => {
    const init = async () => {
      if (wallet) {
        const transferType = "payout"
        const payout = await getAssetTransfers(transferType, wallet)
        setPayoutActivity(payout)
      }
    }

    init()
  }, [])

  return {
    payoutActivity,
  }
}

export default usePayoutActivity
