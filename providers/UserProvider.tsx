import { usePrivy } from "@privy-io/react-auth"
import React, { createContext, useContext, useEffect, useMemo, useState } from "react"

const UserContext = createContext(null)

const UserProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState("")
  const { user } = usePrivy()

  useEffect(() => {
    if (user?.email?.address) setUserEmail(user.email.address)
  }, [user])

  const value = useMemo(
    () => ({
      userEmail,
    }),
    [userEmail],
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
