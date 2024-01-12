import React, { createContext, useContext, useMemo } from "react"
import { BigNumber } from "ethers"
import usePurchaseByPrivy from "../hooks/usePurchaseByPrivy"
import { demoProducts } from "../components/Pages/CheckOutPage/demoProducts"

const CheckOutContext = createContext(null)

const CheckOutProvider = ({ children }) => {
  const purchaseByPrivy = usePurchaseByPrivy()
  const cart = demoProducts
  const totalPrice = cart.reduce(
    (acc, call) => acc.add(BigNumber.from(call.price)),
    BigNumber.from(0),
  )

  const value = useMemo(
    () => ({
      cart,
      ...purchaseByPrivy,
      totalPrice,
    }),
    [cart, purchaseByPrivy, totalPrice],
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
