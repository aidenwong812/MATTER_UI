import { useState, useEffect } from "react"
import getAssetTransfers from "@/lib/getAssetTransfers"

const useTransferHistory = (wallet: string) => {
  const [payoutActivity, setPayoutActivity] = useState([])
  const [sales, setSales] = useState([])

  useEffect(() => {
    const init = async () => {
      if (wallet) {
        let transferType = "payout"
        const payout = await getAssetTransfers(transferType, wallet)
        setPayoutActivity(payout)

        transferType = "sales"
        const salesData = await getAssetTransfers(transferType, wallet)
        setSales(salesData)
      }
    }

    init()
  }, [])

  return {
    payoutActivity,
    sales,
  }
}

export default useTransferHistory
