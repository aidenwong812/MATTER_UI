import { usePrivy } from "@privy-io/react-auth"
import { useRouter } from "next/router"
import useEthPrice from "../hooks/useEthPrice"
import { createContext, useMemo, useEffect, useContext } from "react"

const UserContext = createContext(null)

const UserProvider = ({ children }) => {
  const { user, ready, authenticated } = usePrivy()
  const { pathname, push } = useRouter()
  const { getUsdConversion, ethPrice, getEthConversion } = useEthPrice()

  const isPrivatePage = pathname !== '/' && pathname !== '/services' && pathname !== '/products/digital' && pathname !== '/products/physical'

  const loading = !ready

  useEffect(() => {
    if (isPrivatePage && !authenticated && !loading) push("/")
  }, [isPrivatePage, authenticated, loading])

  const privyEmail = useMemo(() => {
    return user?.google?.email || ""
  }, [user])

  const value = useMemo(
    () => ({
      privyEmail,
      loading,
      getUsdConversion,
      ethPrice,
      getEthConversion,
    }),
    [privyEmail, loading, getUsdConversion, ethPrice, getEthConversion],
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
