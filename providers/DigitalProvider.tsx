import { createContext, useContext, useMemo } from "react"
import useDigitalData from "../hooks/useDigitalData"

const DigitalContext = createContext({} as any)

export const useDigital = () => useContext(DigitalContext)

export const DigitalProvider = ({ children }) => {
  const digitalData = useDigitalData()

  const value = useMemo(
    () => ({
      ...digitalData,
    }),
    [digitalData],
  )

  return <DigitalContext.Provider value={value}>{children}</DigitalContext.Provider>
}
