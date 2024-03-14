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
      quantity: 1,
    }))
    setCart(cartWithEthPrice)
  }, [userData])

  const handleQuantityChange = (e, cartIndex) =>
    setCart(
      cart.map((item, index) =>
        index === cartIndex ? { ...item, quantity: e.target.value } : item,
      ),
    )

  useEffect(() => {
    getCart()
  }, [getCart])

  return {
    cart,
    getCart,
    handleQuantityChange,
  }
}

export default useCartData
