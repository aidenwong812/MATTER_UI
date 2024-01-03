import { usePrivy, useWallets } from "@privy-io/react-auth"
import React, { createContext, useContext, useMemo } from "react"

const UserContext = createContext(null)

const UserProvider = ({ children }) => {
  const { wallets } = useWallets()
  const { user } = usePrivy()
  const connectedWallet = useMemo(() => wallets?.[0]?.address, [wallets])

  const username = useMemo(() => {
    let username = user?.google?.name

    if (user?.email?.address) {
      const markIndex = user.email.address.indexOf('@')
      username = username || user.email.address.slice(0, markIndex)
    }

    return username || ""
  }, [user])

  const value = useMemo(
    () => ({ connectedWallet, username }),
    [connectedWallet, username],
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
