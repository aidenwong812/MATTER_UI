import { useState } from "react"

export enum MODAL_SCREEN {
  INFORMATION_SELECT = "INFORMATION SELECT",
  DELIVERY_ADDRESS = "DELIVERY_ADDRESS",
  CARD_DETAIL = "CARD_DETAIL",
}

const useCreditCardModal = () => {
  const [modalScreen, setModalScreen] = useState(MODAL_SCREEN.INFORMATION_SELECT)
  const [deliveryFirstName, setDeliveryFirstName] = useState("")
  const [deliveryLastName, setDeliveryLastName] = useState("")
  const [deliveryAddress1, setDeliveryAddress1] = useState("")
  const [deliveryAddress2, setDeliveryAddress2] = useState("")
  const [deliveryZipCode, setDeliveryZipCode] = useState("")
  const [deliveryState, setDeliveryState] = useState("")
  const [deliveryCountryCode, setDeliveryCountryCode] = useState("US")
  const [deliveryPhoneNumber, setDeliveryPhoneNumber] = useState("")

  return {
    modalScreen,
    setModalScreen,
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
  }
}

export default useCreditCardModal
