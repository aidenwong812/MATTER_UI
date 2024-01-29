import { useState } from "react"

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
  const [formMode, setFormMode] = useState(FORM_MODE.VISIBLE_MODE)

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
    formMode,
    setFormMode,
  }
}

export default useDeliveryFormData
