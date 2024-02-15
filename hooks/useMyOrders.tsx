import { useCallback, useEffect, useState } from "react"
import getCartsByBuyerId from "../lib/firebase/getCartsByBuyerId"
import { useUserProvider } from "../providers/UserProvider"

const useMyOrders = () => {
  const [orders, setOrders] = useState([])
  const { userData } = useUserProvider()

  const getOrders = useCallback(async () => {
    if (!userData) return

    const response = await getCartsByBuyerId(userData.id, true)
    setOrders(response)
  }, [userData])

  useEffect(() => {
    getOrders()
  }, [getOrders])

  return {
    orders,
    getOrders,
  }
}

export default useMyOrders
