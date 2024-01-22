import { usePrivy } from "@privy-io/react-auth"
import useEthPrice from "./useEthPrice"
import useConnectedWallet from "./useConnectedWallet"
import { useCheckOut } from "../providers/CheckOutProvider"
import { ethers } from "ethers"
import getMulticallFromCart from "../lib/getMulticallFromCart"
import getMintData from "../lib/zora/getMintData"
import { formatEther } from "viem"
import { useEffect, useMemo, useState } from "react"
import { useRouter } from "next/router"
import { toast } from "react-toastify"

const useCrossMint = () => {
  const router = useRouter()
  const { connectedWallet } = useConnectedWallet()
  const { user } = usePrivy()
  const { cart, totalPrice } = useCheckOut()
  const totalPriceEth = ethers.utils.formatEther(totalPrice)
  const multicalls = getMulticallFromCart(cart, getMintData(connectedWallet))
  const [receiptEmail, setReceiptEmail] = useState("")
  const { getUsdConversion } = useEthPrice()
  const usdPrice = getUsdConversion(formatEther(totalPrice.toBigInt()))

  const mintConfig = useMemo(() => {
    if (totalPriceEth && multicalls && connectedWallet) {
      return {
        type: "erc-721",
        totalPrice: totalPriceEth,
        quantity: 1,
        cart: multicalls,
        to: connectedWallet,
      }
    }
    return null
  }, [totalPriceEth, multicalls, connectedWallet])

  const handlePayment = (event) => {
    switch (event.type) {
      case "payment:process.succeeded":
        router.push("/checkout/success")
        break
      case "payment:process.rejected":
        toast.info("Payment rejected")
        break
      case "payment:preparation.failed":
        toast.error("Payment failed")
        break
        break
    }
  }

  useEffect(() => {
    if (user?.email?.address) setReceiptEmail(user.email.address)
  }, [user])

  return {
    mintConfig,
    receiptEmail,
    usdPrice,
    setReceiptEmail,
    handlePayment,
  }
}

export default useCrossMint
