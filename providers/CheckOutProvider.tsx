import React, { createContext, useContext, useMemo } from "react"
import useCartData from "@/hooks/useCartData"

const CheckOutContext = createContext(null)

const CheckOutProvider = ({ children }) => {
  const { getCart, cart: liveCart, handleQuantityChange } = useCartData()

  const totalPrice = liveCart.reduce((acc, call) => {
    return acc + parseFloat(call.product.priceInUsd) * call.quantity
  }, 0)

  const value = useMemo(
    () => ({
      totalPrice,
      getCart,
      liveCart,
      handleQuantityChange,
    }),
    [totalPrice, getCart, liveCart, handleQuantityChange],
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
