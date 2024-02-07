import { createContext, useContext, useMemo } from "react"
import usePhysicalData from "../hooks/usePhysicalData"

const PhysicalContext = createContext({} as any)

export const usePhysical = () => useContext(PhysicalContext)

export const PhysicalProvider = ({ children }) => {
  const physicalData = usePhysicalData()

  const value = useMemo(
    () => ({
      ...physicalData,
    }),
    [physicalData],
  )

  return <PhysicalContext.Provider value={value}>{children}</PhysicalContext.Provider>
}
