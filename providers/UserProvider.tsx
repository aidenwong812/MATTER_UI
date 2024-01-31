import { usePrivy } from "@privy-io/react-auth"
import { useRouter } from "next/router"
import { createContext, useMemo, useEffect, useContext, useState, useCallback } from "react"
import getCustomer from "../lib/firebase/getCustomer"

const UserContext = createContext(null)

const UserProvider = ({ children }) => {
  const [privyEmail, setPrivyEmail] = useState("")
  const { user, authenticated, ready } = usePrivy()
  const [userData, setUserData] = useState(null)
  const { pathname, push } = useRouter()

  const getUserData = useCallback(async () => {
    if (!authenticated || !privyEmail) return
    const data = (await getCustomer(privyEmail)) as any
    if (!data) return
    setUserData(data)
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
      userData,
    }),
    [userData, privyEmail, getUserData],
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
