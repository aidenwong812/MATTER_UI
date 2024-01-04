import { usePrivy, useWallets } from "@privy-io/react-auth"
import { useRouter } from "next/router"
import React, { createContext, useContext, useEffect, useMemo } from "react"

const UserContext = createContext(null)

const UserProvider = ({ children }) => {
  const { wallets } = useWallets()
  const { user, ready, authenticated } = usePrivy()
  const router = useRouter()
  const pathname = router.pathname

  const isPrivatePage = pathname !== '/'

  const loading = !ready

  const connectedWallet = useMemo(() => wallets?.[0]?.address, [wallets])

  useEffect(() => {
    if (isPrivatePage && !authenticated && !loading) router.push("/")
  }, [isPrivatePage, authenticated, loading])

  const username = useMemo(() => {
    let username = user?.google?.name

    if (user?.email?.address) {
      const markIndex = user.email.address.indexOf('@')
      username = username || user.email.address.slice(0, markIndex)
    }

    return username || ""
  }, [user])

  const value = useMemo(
    () => ({ 
      connectedWallet, 
      username,
      loading
    }),
    [
      connectedWallet, 
      username,
      loading
    ],
  )

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export const useUserProvider = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error("useInviteCode must be used within a UserProvider")
  }
  return context
}

export default UserProvider
