import { useCallback, useEffect, useState } from "react"
import getCartsByBuyerId from "../lib/firebase/getCartsByBuyerId"
import { useUserProvider } from "../providers/UserProvider"

const useCartData = () => {
  const [carts, setCarts] = useState([])
  const { userData } = useUserProvider()

  const getCarts = useCallback(async () => {
    if (!userData) return

    const response = await getCartsByBuyerId(userData.id)
    setCarts(response)
  }, [userData])

  useEffect(() => {
    getCarts()
  }, [getCarts])

  return {
    carts,
    getCarts,
  }
}

export default useCartData
