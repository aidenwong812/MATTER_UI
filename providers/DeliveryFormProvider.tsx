import React, { createContext, useContext, useMemo } from "react"
import useDeliveryFormData from "../hooks/useDeliveryFormData"

const DeliveryFormContext = createContext(null)

const DeliveryFormProvider = ({ children }) => {
  const deliveryFormData = useDeliveryFormData()

  const value = useMemo(
    () => ({
      ...deliveryFormData,
    }),
    [deliveryFormData],
  )

  return <DeliveryFormContext.Provider value={value}>{children}</DeliveryFormContext.Provider>
}

export const useDeliveryForm = () => {
  const context = useContext(DeliveryFormContext)
  if (!context) {
    throw new Error("useDeliveryForm must be used within a DeliveryFormProvider")
  }
  return context
}

export default DeliveryFormProvider
