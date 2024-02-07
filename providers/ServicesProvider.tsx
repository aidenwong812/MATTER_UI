import { createContext, useContext, useMemo } from "react"
import useServicesData from "../hooks/useServicesData"

const ServicesContext = createContext({} as any)

export const useServices = () => useContext(ServicesContext)

export const ServicesProvider = ({ children }) => {
  const servicesData = useServicesData()

  const value = useMemo(
    () => ({
      ...servicesData,
    }),
    [servicesData],
  )

  return <ServicesContext.Provider value={value}>{children}</ServicesContext.Provider>
}
