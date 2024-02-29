import { createContext, useContext, useMemo, useState } from "react"
import useMyOrders from "@/hooks/useMyOrders"
import useMyListings from "@/hooks/useMyListings"
import useConnectedWallet from "@/hooks/useConnectedWallet"
import useSales from "@/hooks/useSales"

const DashboardContext = createContext({} as any)

export const useDashboard = () => useContext(DashboardContext)

export const DashboardProvider = ({ children }) => {
  const [selectedPeriod, setSelectedPeriod] = useState("today")

  const myListings = useMyListings()
  const orders = useMyOrders()
  const { connectedWallet } = useConnectedWallet()
  const sales = useSales(connectedWallet, selectedPeriod)

  const value = useMemo(
    () => ({
      selectedPeriod,
      setSelectedPeriod,
      ...myListings,
      ...orders,
      ...sales,
    }),
    [myListings, orders, sales],
  )

  return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>
}
