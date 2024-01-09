import { usePrivy, useWallets } from "@privy-io/react-auth"
import { useRouter } from "next/router"
import React, { createContext, useContext, useEffect, useMemo } from "react"
import useEthPrice from "../hooks/useEthPrice"
import useBalance from "../hooks/useBalance"

const UserContext = createContext(null)

const UserProvider = ({ children }) => {
  const { wallets } = useWallets()
  const { user, ready, authenticated } = usePrivy()
  const router = useRouter()
  const pathname = router.pathname
  const { getUsdConversion, ethPrice, getEthConversion } = useEthPrice()
  const { balance } = useBalance()

  const usdBalance = useMemo(() => {
    return getUsdConversion(balance || 0)
  }, [getUsdConversion, balance])

  const isPrivatePage = pathname !== '/'

  const loading = !ready

  const connectedWallet = useMemo(() => wallets?.[0]?.address, [wallets])

  useEffect(() => {
    if (isPrivatePage && !authenticated && !loading) router.push("/")
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
      usdBalance,
      getEthConversion
    }),
    [
      connectedWallet, 
      privyEmail,
      loading,
      getUsdConversion, 
      ethPrice,
      usdBalance,
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
