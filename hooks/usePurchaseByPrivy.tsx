import { useMemo, useState } from "react"
import { useRouter } from "next/router"
import { MoonpayConfig } from "@privy-io/react-auth"
import { toast } from "react-toastify"
import handleTxError from "../lib/handleTxError"
import { useUserProvider } from "../providers/UserProvider"
import useBalance from "./useBalance"
import useConnectedWallet from "./useConnectedWallet"
import usePreparePrivyWallet from "./usePreparePrivyWallet"
import { BRAND_HEX, BRAND_THEME } from "../lib/consts"
import usePrivyMulticall from "./usePrivyMulticall"

const usePurchaseByPrivy = () => {
  const { push } = useRouter()
  const { prepare } = usePreparePrivyWallet()
  const { aggregate3Value } = usePrivyMulticall()
  const { connectedWallet } = useConnectedWallet()
  const { getEthConversion } = useUserProvider()
  const [totalPrice, setTotalPrice] = useState(2)

  const { privyWallet } = useConnectedWallet()
  const { balance } = useBalance()
  const ethConvertedAmount = useMemo(
    () => getEthConversion(totalPrice),
    [totalPrice, getEthConversion],
  )
  const hasBalanceToPurchase = ethConvertedAmount < parseFloat(balance)

  const fund = async () => {
    const fundWalletConfig = {
      currencyCode: "ETH_ETHEREUM",
      quoteCurrencyAmount: parseFloat(getEthConversion(totalPrice).toFixed(4)),
      uiConfig: { accentColor: BRAND_HEX, theme: BRAND_THEME },
    } as MoonpayConfig
    await privyWallet.fund({ config: fundWalletConfig })
  }

  const purchaseByPrivy = async () => {
    console.log("SWEETS USE MULTICALL", connectedWallet)
    if (!prepare()) return
    if (!hasBalanceToPurchase || totalPrice <= 0) {
      await fund()
      return
    }
    try {
      const calls = []
      const response = await aggregate3Value(calls)
      console.log("SWEETS RESPONSE", response)
      toast.success("purchased!")
      push("/checkout/success")
    } catch (err) {
      handleTxError(err)
    }
  }

  return { purchaseByPrivy, totalPrice, setTotalPrice }
}

export default usePurchaseByPrivy
