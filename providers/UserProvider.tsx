import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"
import getUser from "../lib/firebase/getUser"
import getIpfsLink from "../lib/getIpfsLink"
import { usePrivy } from "@privy-io/react-auth"

const UserContext = createContext(null)

const UserProvider = ({ children }) => {
  const [privyEmail, setPrivyEmail] = useState("")
  const { user, authenticated } = usePrivy()
  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [userPFP, setUserPFP] = useState("")

  const getUserData = useCallback(async () => {
    if (!authenticated || !privyEmail) return
    const userData = (await getUser(privyEmail)) as any
    if (!userData) return
    setUserName(userData.user_name)
    setUserEmail(userData.email)
    setUserPFP(getIpfsLink(userData.pfp))
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
      userEmail,
      userPFP,
    }),
    [userEmail, userName, privyEmail, getUserData, userPFP],
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
