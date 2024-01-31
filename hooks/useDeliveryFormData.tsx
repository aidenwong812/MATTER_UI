import { useCallback, useEffect, useState } from "react"
import createCustomer from "../lib/firebase/createCustomer"
import { useUserProvider } from "../providers/UserProvider"
import getCustomer from "../lib/firebase/getCustomer"

export enum FORM_MODE {
  EDIT_MODE = "EDIT_MODE",
  VISIBLE_MODE = "VISIBLE_MODE",
}

const useDeliveryFormData = () => {
  const [deliveryFirstName, setDeliveryFirstName] = useState("")
  const [deliveryLastName, setDeliveryLastName] = useState("")
  const [deliveryAddress1, setDeliveryAddress1] = useState("")
  const [deliveryAddress2, setDeliveryAddress2] = useState("")
  const [deliveryZipCode, setDeliveryZipCode] = useState("")
  const [deliveryState, setDeliveryState] = useState("")
  const [deliveryCountryCode, setDeliveryCountryCode] = useState("US")
  const [deliveryPhoneNumber, setDeliveryPhoneNumber] = useState("")
  const { privyEmail } = useUserProvider()
  const [loading, setLoading] = useState(false)
  const [formMode, setFormMode] = useState(FORM_MODE.VISIBLE_MODE)

  const isCompletedDelivery =
    deliveryFirstName &&
    deliveryLastName &&
    deliveryAddress1 &&
    deliveryCountryCode &&
    deliveryState &&
    deliveryZipCode

  const initialize = useCallback(async () => {
    if (!privyEmail) return

    const customerData: any = await getCustomer(privyEmail)

    if (!customerData) return

    setDeliveryFirstName(customerData.first_name)
    setDeliveryLastName(customerData.last_name)
    setDeliveryState(customerData.state)
    setDeliveryPhoneNumber(customerData.phone_number)
    setDeliveryZipCode(customerData.zip_code)
    setDeliveryCountryCode(customerData.country_code)
    setDeliveryAddress1(customerData.address_1)
    setDeliveryAddress2(customerData.address_2)
  }, [privyEmail])

  const confirmDeliveryAddress = async () => {
    setLoading(true)
    await createCustomer({
      email: privyEmail,
      first_name: deliveryFirstName,
      last_name: deliveryLastName,
      address_1: deliveryAddress1,
      address_2: deliveryAddress2,
      state: deliveryState,
      zip_code: deliveryZipCode,
      phone_number: deliveryPhoneNumber,
      country_code: deliveryCountryCode,
    })
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
