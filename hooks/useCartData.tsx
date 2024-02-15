import { useCallback, useEffect, useState } from "react"
import getCartsByBuyerId from "@/lib/firebase/getCartsByBuyerId"
import { useUserProvider } from "@/providers/UserProvider"
import getBigNumberString from "@/lib/getBigNumberString"
import { useEthPrice } from "@/providers/EthPriceProvider"

const useCartData = () => {
  const [cart, setCart] = useState([])
  const { getEthConversion } = useEthPrice()
  const { userData } = useUserProvider()

  const getCart = useCallback(async () => {
    if (!userData) return

    const response = (await getCartsByBuyerId(userData.id)) as any
    const cartWithEthPrice = response.map((data) => ({
      ...data,
      ethPrice: getBigNumberString(getEthConversion(data.product.priceInUsd)),
    }))
    setCart(cartWithEthPrice)
  }, [userData])

  useEffect(() => {
    getCart()
  }, [getCart])

  return {
    cart,
    getCart,
  }
}

export default useCartData
