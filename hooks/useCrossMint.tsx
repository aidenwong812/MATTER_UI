import useConnectedWallet from "./useConnectedWallet"
import { ethers } from "ethers"
import getMulticallFromCart from "../lib/getMulticallFromCart"
import getMintData from "../lib/zora/getMintData"
import { formatEther } from "viem"
import { useEffect, useMemo, useState } from "react"
import { useRouter } from "next/router"
import { toast } from "react-toastify"
import { useUserProvider } from "../providers/UserProvider"
import { useMatterMarket } from "../providers/MatterMarketProvider"

const useCrossMint = (cart, totalPrice) => {
  const { push } = useRouter()
  const { connectedWallet } = useConnectedWallet()
  const { userData } = useUserProvider()
  const [receiptEmail, setReceiptEmail] = useState("")
  const { getUsdConversion } = useMatterMarket()

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
  }, [totalPriceEth, multicalls, connectedWallet, cart, totalPrice])

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
    if (userData?.privyEmail) setReceiptEmail(userData?.privyEmail)
  }, [userData])

  return {
    mintConfig,
    receiptEmail,
    usdPrice,
    setReceiptEmail,
    handlePayment,
  }
}

export default useCrossMint
