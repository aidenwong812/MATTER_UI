import { useContext, createContext, useMemo } from "react"
import useDistributeProfits from "../hooks/useDistributeProfits"

const DistributeContext = createContext(null as any)

export const DistributeProvider = ({ children }: any) => {
  const distribute = useDistributeProfits()

  const provider = useMemo(
    () => ({
      ...distribute,
    }),
    [distribute],
  )

  return <DistributeContext.Provider value={provider}>{children}</DistributeContext.Provider>
}

export const useDistributeProvider = () => useContext(DistributeContext)
