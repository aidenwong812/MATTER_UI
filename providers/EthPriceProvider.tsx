import { createContext, useContext, useMemo } from "react"
import useEthPriceData from "../hooks/useEthPriceData"

const EthPriceContext = createContext({} as any)

export const useEthPrice = () => useContext(EthPriceContext)

export const EthPriceProvider = ({ children }) => {
  const ethPriceData = useEthPriceData()

  const value = useMemo(
    () => ({
      ...ethPriceData,
    }),
    [ethPriceData],
  )

  return <EthPriceContext.Provider value={value}>{children}</EthPriceContext.Provider>
}
