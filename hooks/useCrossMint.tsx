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

  const totalPriceEth = String(totalPrice)

  const mintConfig = useMemo(() => {
    // const multicalls = []

    if (totalPriceEth && cart && connectedWallet) {
      return {
        type: "highlight-series",
        totalPrice: totalPriceEth,
        quantity: 1,
        cart,
        to: connectedWallet,
      }
    }
    return null
  }, [totalPriceEth, connectedWallet, cart])

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
