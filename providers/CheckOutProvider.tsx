import React, { createContext, useContext, useMemo } from "react"
import { BigNumber } from "ethers"
import useCartData from "../hooks/useCartData"

const CheckOutContext = createContext(null)

const CheckOutProvider = ({ children }) => {
  const { cart, getCart } = useCartData()

  const totalPrice = cart.reduce(
    (acc, call) => acc.add(BigNumber.from(call.ethPrice)),
    BigNumber.from(0),
  )

  const value = useMemo(
    () => ({
      cart,
      totalPrice,
      getCart,
    }),
    [cart, totalPrice, getCart],
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
