import React, { createContext, useContext, useMemo } from "react"
import { BigNumber } from "ethers"
import useCartData from "@/hooks/useCartData"
import { demoProduct } from "@/components/Pages/ProductPage/demoProduct"

const CheckOutContext = createContext(null)

const CheckOutProvider = ({ children }) => {
  const { getCart, cart: liveCart } = useCartData()
  const cart = demoProduct

  const totalPrice = cart.reduce(
    (acc, call) => acc.add(BigNumber.from(call.price)),
    BigNumber.from(0),
  )

  const value = useMemo(
    () => ({
      cart,
      totalPrice,
      getCart,
      liveCart,
    }),
    [cart, totalPrice, getCart, liveCart],
  )

  return <CheckOutContext.Provider value={value}>{children}</CheckOutContext.Provider>
}

export const useCheckOut = () => {
  const context = useContext(CheckOutContext)
  if (!context) {
    throw new Error("useCheckOut must be used within a CheckOutProvider")
  }
  return context
}

export default CheckOutProvider
