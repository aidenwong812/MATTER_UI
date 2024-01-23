import { useEffect, useState } from "react"
import createCustomer from "../lib/firebase/createCustomer"
import { useUserProvider } from "../providers/UserProvider"
import getCustomer from "../lib/firebase/getCustomer"

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
  const { userEmail } = useUserProvider()
  const [loading, setLoading] = useState(false)

  const confirmDeliveryAddress = async () => {
    setLoading(true)
    await createCustomer({
      email: userEmail,
      first_name: deliveryFirstName,
      last_name: deliveryLastName,
      address_1: deliveryAddress1,
      address_2: deliveryAddress2,
      state: deliveryState,
      zip_code: deliveryZipCode,
      phone_number: deliveryPhoneNumber,
      country_code: deliveryCountryCode,
    })
    setModalScreen(MODAL_SCREEN.INFORMATION_SELECT)
    setLoading(false)
  }

  useEffect(() => {
    const init = async () => {
      const customerData: any = await getCustomer(userEmail)

      if (!customerData) return

      setDeliveryFirstName(customerData.first_name)
      setDeliveryLastName(customerData.last_name)
      setDeliveryState(customerData.state)
      setDeliveryPhoneNumber(customerData.phone_number)
      setDeliveryZipCode(customerData.zip_code)
      setDeliveryCountryCode(customerData.country_code)
      setDeliveryAddress1(customerData.address_1)
      setDeliveryAddress2(customerData.address_2)
    }

    if (!userEmail) return
    init()
  }, [userEmail])

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
    confirmDeliveryAddress,
    loading,
  }
}

export default useCreditCardModal
