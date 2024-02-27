import useConnectedWallet from "@/hooks/useConnectedWallet"
import { useEffect, useMemo, useState } from "react"
import { useRouter } from "next/router"
import { toast } from "react-toastify"
import { useUserProvider } from "@/providers/UserProvider"

const useCrossMint = (cart, totalPrice) => {
  const { push } = useRouter()
  const { connectedWallet } = useConnectedWallet()
  const { userData } = useUserProvider()
  const [receiptEmail, setReceiptEmail] = useState("")

  const mintConfig = useMemo(() => {
    const multicalls = []

    if (totalPrice && multicalls && connectedWallet) {
      return {
        type: "erc-721",
        totalPrice: String(totalPrice),
        quantity: 1,
        cart: multicalls,
        to: connectedWallet,
      }
    }
    return null
  }, [totalPrice, connectedWallet])

  const handlePayment = (event) => {
    switch (event.type) {
      case "payment:process.succeeded":
        push("/checkout/success")
        break
      case "payment:process.rejected":
        toast.info("Payment rejected")
        break
      case "payment:preparation.failed":
        break
      default:
        break
    }
  }

  useEffect(() => {
    if (userData?.privyEmail) setReceiptEmail(userData?.privyEmail)
  }, [userData])

  return {
    mintConfig,
    receiptEmail,
    totalPrice,
    setReceiptEmail,
    handlePayment,
  }
}

export default useCrossMint
