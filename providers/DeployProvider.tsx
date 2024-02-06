import { createContext, useContext, useMemo } from "react"

import useDeployData from "../hooks/useDeployData"

const DeployContext = createContext({} as any)

export const useDeploy = () => useContext(DeployContext)

export const DeployProvider = ({ children }) => {
  const deployData = useDeployData()

  const value = useMemo(
    () => ({
      ...deployData,
    }),
    [deployData],
  )

  return <DeployContext.Provider value={value}>{children}</DeployContext.Provider>
}
