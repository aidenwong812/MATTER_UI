import { usePrivy } from "@privy-io/react-auth"
import { useRouter } from "next/router"
import { createContext, useMemo, useEffect, useContext, useState, useCallback } from "react"
import { getIpfsLink } from "onchain-magic"
import getCustomer from "../lib/firebase/getCustomer"

const UserContext = createContext(null)

const UserProvider = ({ children }) => {
  const [privyEmail, setPrivyEmail] = useState("")
  const { user, authenticated, ready } = usePrivy()
  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [userPFP, setUserPFP] = useState("")
  const { pathname, push } = useRouter()

  const getUserData = useCallback(async () => {
    if (!authenticated || !privyEmail) return
    const userData = (await getCustomer(privyEmail)) as any
    if (!userData) return
    setUserName(userData.user_name)
    setUserEmail(userData.email)
    setUserPFP(getIpfsLink(userData.pfp))
  }, [authenticated, privyEmail])

  const loading = !ready

  const isPrivatePage =
    pathname !== "/" &&
    pathname !== "/services" &&
    pathname !== "/products/digital" &&
    pathname !== "/products/physical" &&
    pathname !== "/product"

  useEffect(() => {
    if (isPrivatePage && !authenticated && !loading) push("/")
  }, [isPrivatePage, authenticated, loading])

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
