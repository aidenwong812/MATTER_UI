import { createContext, useContext, useMemo } from "react"
import useMyListings from "../hooks/useMyListings"

const DashboardContext = createContext({} as any)

export const useDashboard = () => useContext(DashboardContext)

export const DashboardProvider = ({ children }) => {
  const myListings = useMyListings()

  const value = useMemo(
    () => ({
      ...myListings,
    }),
    [myListings],
  )

  return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>
}
