import { usePrivy } from "@privy-io/react-auth"
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"
import getUser from "../lib/firebase/getUser"

const UserContext = createContext(null)

const UserProvider = ({ children }) => {
  const [privyEmail, setPrivyEmail] = useState("")
  const { user, authenticated } = usePrivy()
  const [userName, setUserName] = useState("")
  const [userEmail,  setUserEmail] = useState("")

  const getUserData = useCallback(async () => {
    if (!authenticated || !privyEmail) return
    const userData = await getUser(privyEmail) as any
    if (!userData) return
    setUserName(userData.user_name)
    setUserEmail(userData.email)
  }, [authenticated, privyEmail])

  useEffect(() => {
    getUserData()
  }, [getUserData])

  useEffect(() => {
    if (user?.email?.address) setPrivyEmail(user.email.address)
  }, [user])

  const value = useMemo(
    () => ({
      privyEmail,
      getUserData,
      userName,
      userEmail
    }),
    [
      userEmail,
      userName,
      privyEmail,
      getUserData
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
