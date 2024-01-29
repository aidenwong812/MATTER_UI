import { usePrivy } from "@privy-io/react-auth"
import useEthPrice from "./useEthPrice"
import useConnectedWallet from "./useConnectedWallet"
import { ethers } from "ethers"
import getMulticallFromCart from "../lib/getMulticallFromCart"
import getMintData from "../lib/zora/getMintData"
import { formatEther } from "viem"
import { useEffect, useMemo, useState } from "react"
import { useRouter } from "next/router"
import { toast } from "react-toastify"

const useCrossMint = (cart, totalPrice) => {
  const { push } = useRouter()
  const { connectedWallet } = useConnectedWallet()
  const { user } = usePrivy()
  const [receiptEmail, setReceiptEmail] = useState("")
  const { getUsdConversion } = useEthPrice()

  const multicalls = cart && getMulticallFromCart(cart, getMintData(connectedWallet))
  const totalPriceEth = totalPrice && ethers.utils.formatEther(totalPrice)
  const usdPrice = totalPrice && getUsdConversion(formatEther(totalPrice.toBigInt()))

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
        push("/checkout/success")
        break
      case "payment:process.rejected":
        toast.info("Payment rejected")
        break
      case "payment:preparation.failed":
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
