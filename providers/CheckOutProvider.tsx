import React, { createContext, useContext, useMemo } from "react"
import usePurchaseByPrivy from "../hooks/usePurchaseByPrivy"

const CheckOutContext = createContext(null)

const CheckOutProvider = ({ children }) => {
  const purchaseByPrivy = usePurchaseByPrivy()

  const value = useMemo(
    () => ({
      ...purchaseByPrivy,
    }),
    [purchaseByPrivy],
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
