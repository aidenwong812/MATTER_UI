import React, { createContext, useContext, useEffect, useMemo, useState } from "react"
import { usePrivy, useWallets } from "@privy-io/react-auth"
import { useRouter } from "next/router"
import useEthPrice from "../hooks/useEthPrice"

const UserContext = createContext(null)

const UserProvider = ({ children }) => {
  const { wallets } = useWallets()
  const { user, ready, authenticated } = usePrivy()
  const { pathname, push } = useRouter()
  const { getUsdConversion, ethPrice, getEthConversion } = useEthPrice()

  const isPrivatePage = pathname !== '/'

  const loading = !ready

  const connectedWallet = useMemo(() => wallets?.[0]?.address, [wallets])

  useEffect(() => {
    if (isPrivatePage && !authenticated && !loading) push("/")
  }, [isPrivatePage, authenticated, loading])

  const privyEmail = useMemo(() => {
    return user?.google?.email || ""
  }, [user])

  const value = useMemo(
    () => ({ 
      connectedWallet, 
      privyEmail,
      loading,
      getUsdConversion, 
      ethPrice,
      getEthConversion
    }),
    [
      connectedWallet, 
      privyEmail,
      loading,
      getUsdConversion, 
      ethPrice,
      getEthConversion
    ],
  )

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export const useUserProvider = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error("useUserProvider must be used within a UserProvider")
  }
  return context
}

export default UserProvider
