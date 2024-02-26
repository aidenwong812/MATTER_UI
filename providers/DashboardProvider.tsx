import { createContext, useContext, useMemo } from "react"
import useMyOrders from "@/hooks/useMyOrders"
import useMyListings from "@/hooks/useMyListings"

const DashboardContext = createContext({} as any)

export const useDashboard = () => useContext(DashboardContext)

export const DashboardProvider = ({ children }) => {
  const myListings = useMyListings()
  const orders = useMyOrders()

  const value = useMemo(
    () => ({
      ...myListings,
      ...orders,
    }),
    [myListings, orders],
  )

  return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>
}
