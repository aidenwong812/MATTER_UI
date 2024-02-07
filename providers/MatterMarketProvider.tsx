import { createContext, useContext, useMemo } from "react"
import useEthPriceData from "../hooks/useEthPriceData"

const MatterMarketContext = createContext({} as any)

export const useMatterMarket = () => useContext(MatterMarketContext)

export const MatterMarketProvider = ({ children }) => {
  const ethPriceData = useEthPriceData()

  const value = useMemo(
    () => ({
      ...ethPriceData,
    }),
    [ethPriceData],
  )

  return <MatterMarketContext.Provider value={value}>{children}</MatterMarketContext.Provider>
}
