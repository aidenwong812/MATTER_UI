import { useContext, createContext, useMemo } from "react"
import useMyFunds from "../hooks/useMyFunds"

const DashboardContext = createContext(null as any)

export const DashboardProvider = ({ children }: any) => {
  const myFunds = useMyFunds()

  const provider = useMemo(
    () => ({
      ...myFunds,
    }),
    [myFunds],
  )

  return <DashboardContext.Provider value={provider}>{children}</DashboardContext.Provider>
}

export const useDashboardProvider = () => useContext(DashboardContext)
