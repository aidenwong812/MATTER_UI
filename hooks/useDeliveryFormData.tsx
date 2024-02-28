import { useCallback, useEffect, useMemo, useState } from "react"
import { toast } from "react-toastify"
import createCustomer from "../lib/firebase/createCustomer"
import { useUserProvider } from "../providers/UserProvider"
import getCustomer from "../lib/firebase/getCustomer"

export enum FORM_MODE {
  EDIT_MODE = "EDIT_MODE",
  VISIBLE_MODE = "VISIBLE_MODE",
}

const useDeliveryFormData = () => {
  const { privyEmail } = useUserProvider()
  const [deliveryFirstName, setDeliveryFirstName] = useState("")
  const [deliveryLastName, setDeliveryLastName] = useState("")
  const [deliveryAddress1, setDeliveryAddress1] = useState("")
  const [deliveryAddress2, setDeliveryAddress2] = useState("")
  const [deliveryZipCode, setDeliveryZipCode] = useState("")
  const [deliveryState, setDeliveryState] = useState("")
  const [deliveryCountryCode, setDeliveryCountryCode] = useState("US")
  const [deliveryPhoneNumber, setDeliveryPhoneNumber] = useState("")
  const { userData } = useUserProvider()
  const [loading, setLoading] = useState(false)
  const [formMode, setFormMode] = useState(FORM_MODE.VISIBLE_MODE)

  const isCompletedDelivery = useMemo(() => {
    if (
      deliveryAddress1 &&
      deliveryFirstName &&
      deliveryCountryCode &&
      deliveryLastName &&
      deliveryZipCode &&
      deliveryState
    )
      return true
    return false
  }, [
    deliveryFirstName,
    deliveryLastName,
    deliveryAddress1,
    deliveryCountryCode,
    deliveryState,
    deliveryZipCode,
  ])

  const initialize = useCallback(async () => {
    if (!userData?.privyEmail) return

    const customerData: any = await getCustomer(userData?.privyEmail || privyEmail)

    if (!customerData) return

    setDeliveryFirstName(customerData.firstName || "")
    setDeliveryLastName(customerData.lastName || "")
    setDeliveryState(customerData.state || "")
    setDeliveryPhoneNumber(customerData.phoneNumber || "")
    setDeliveryZipCode(customerData.zipCode || "")
    setDeliveryCountryCode(customerData.countryCode || "US")
    setDeliveryAddress1(customerData.address1 || "")
    setDeliveryAddress2(customerData.address2 || "")
  }, [userData])

  const confirmDeliveryAddress = async () => {
    setLoading(true)
    await createCustomer({
      email: userData?.privyEmail,
      privyEmail,
      firstName: deliveryFirstName,
      lastName: deliveryLastName,
      address1: deliveryAddress1,
      address2: deliveryAddress2,
      state: deliveryState,
      zipCode: deliveryZipCode,
      phoneNumber: deliveryPhoneNumber,
      countryCode: deliveryCountryCode,
    })
    toast.success("Saved Successfully.")
    await initialize()
    setFormMode(FORM_MODE.VISIBLE_MODE)
    setLoading(false)
  }

  useEffect(() => {
    initialize()
  }, [initialize])

  return {
    deliveryFirstName,
    setDeliveryPhoneNumber,
    setDeliveryFirstName,
    deliveryLastName,
    setDeliveryLastName,
    deliveryAddress1,
    deliveryAddress2,
    setDeliveryAddress1,
    setDeliveryAddress2,
    deliveryZipCode,
    setDeliveryZipCode,
    deliveryState,
    setDeliveryState,
    deliveryCountryCode,
    setDeliveryCountryCode,
    deliveryPhoneNumber,
    confirmDeliveryAddress,
    loading,
    isCompletedDelivery,
    formMode,
    setFormMode,
  }
}

export default useDeliveryFormData
