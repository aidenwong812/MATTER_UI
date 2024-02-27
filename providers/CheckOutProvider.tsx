import React, { createContext, useContext, useMemo } from "react"
import useCartData from "@/hooks/useCartData"

const CheckOutContext = createContext(null)

const CheckOutProvider = ({ children }) => {
  const { getCart, cart: liveCart } = useCartData()

  const totalPrice = liveCart.reduce((acc, call) => {
    return acc + parseFloat(call.product.priceInUsd)
  }, 0)

  const value = useMemo(
    () => ({
      totalPrice,
      getCart,
      liveCart,
    }),
    [totalPrice, getCart, liveCart],
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
