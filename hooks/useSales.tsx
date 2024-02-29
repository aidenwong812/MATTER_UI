import { useState, useEffect } from "react"
import getAssetTransfers from "@/lib/getAssetTransfers"
import getStartDate from "@/lib/getStartDate"

const useSales = (wallet: string, selectedPeriod: string) => {
  const [sales, setSales] = useState([])

  useEffect(() => {
    const init = async () => {
      if (wallet) {
        const startDate = getStartDate(selectedPeriod)
        const transferType = "sales"

        const salesData = await getAssetTransfers(transferType, wallet)
        if (salesData) {
          const filteredSalesData = salesData.filter(
            (one) => new Date(one.metadata.blockTimestamp).getTime() >= startDate,
          )
          setSales(filteredSalesData)
        }
      }
    }

    init()
  }, [selectedPeriod, wallet])

  return {
    sales,
  }
}

export default useSales
