import React, { createContext, useContext, useMemo } from "react"
import { BigNumber } from "ethers"
import useCartData from "../hooks/useCartData"
import { useMatterMarket } from "./MatterMarketProvider"
import getBigNumberString from "../lib/getBigNumberString"

const CheckOutContext = createContext(null)

const CheckOutProvider = ({ children }) => {
  const { carts, getCarts } = useCartData()
  const { getEthConversion } = useMatterMarket()

  const totalPrice = carts.reduce(
    (acc, call) =>
      acc.add(BigNumber.from(getBigNumberString(getEthConversion(call.product.priceInUsd)))),
    BigNumber.from(0),
  )

  const value = useMemo(
    () => ({
      carts,
      totalPrice,
      getCarts,
    }),
    [carts, totalPrice, getCarts],
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
