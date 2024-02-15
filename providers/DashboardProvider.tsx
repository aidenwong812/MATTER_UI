import { createContext, useContext, useMemo } from "react"
import useMyListings from "../hooks/useMyListings"
import useMyOrders from "@/hooks/useMyOrders"

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
