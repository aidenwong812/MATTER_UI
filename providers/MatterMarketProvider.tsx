import { createContext, useContext, useMemo } from "react"
import useMatterMarketData from "../hooks/useMatterMarketData"

const MatterMarketContext = createContext({} as any)

export const useMatterMarket = () => useContext(MatterMarketContext)

export const MatterMarketProvider = ({ children, type = "Service" }) => {
  const marketData = useMatterMarketData(type)

  const value = useMemo(
    () => ({
      ...marketData,
    }),
    [marketData],
  )

  return <MatterMarketContext.Provider value={value}>{children}</MatterMarketContext.Provider>
}
