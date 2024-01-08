import React, { createContext, useContext, useMemo, useState } from "react"
import { useUserProvider } from "./UserProvider"
import useConnectedWallet from "../hooks/useConnectedWallet"
import useBalance from "../hooks/useBalance"
import usePrivySendTransaction from "../hooks/usePrivySendTransaction"
import useSaleStatus from "../hooks/useSaleStatus"
import { MoonpayConfig } from "@privy-io/react-auth"
import {
  BRAND_HEX,
  BRAND_THEME,
  CHAIN_ID,
  DROP_ADDRESS,
  ERC6551_IMPLEMENTATION_ADDRESS,
  ERC6551_INIT_DATA,
  ERC6551_REGISTRY_ADDRESS,
} from "../lib/consts"
import abi from "../lib/abi/minter.json"
import { BigNumber } from "ethers"
import { useRouter } from "next/router"
import { toast } from "react-toastify"
import usePreparePrivyWallet from "../hooks/usePreparePrivyWallet"
import handleTxError from "../lib/handleTxError"

const CheckOutContext = createContext(null)

const CheckOutProvider = ({ children }) => {
  const { push } = useRouter()
  const { prepare } = usePreparePrivyWallet()
  const [totalPrice, setTotalPrice] = useState(2)
  const { getEthConversion } = useUserProvider()
  const { privyWallet, connectedWallet } = useConnectedWallet()
  const { balance } = useBalance()
  const ethConvertedAmount = useMemo(() => getEthConversion(totalPrice), [totalPrice, getEthConversion])
  const hasBalanceToPurchase = ethConvertedAmount < parseFloat(balance)
  const { sendTransaction } = usePrivySendTransaction()
  const { publicSalePrice } = useSaleStatus()

  const fund = async () => {
    const fundWalletConfig = {
      currencyCode: "ETH_ETHEREUM",
      quoteCurrencyAmount: parseFloat(getEthConversion(totalPrice).toFixed(4)),
      uiConfig: { accentColor: BRAND_HEX, theme: BRAND_THEME },
    } as MoonpayConfig
    await privyWallet.fund({ config: fundWalletConfig })
  }

  const purchaseByPrivy = async () => {
    if (!prepare()) return
    if (!hasBalanceToPurchase || totalPrice <= 0) {
      await fund()
      return
    }
    try {
      await sendTransaction(
        process.env.NEXT_PUBLIC_MINTER,
        CHAIN_ID,
        abi,
        "purchase",
        [
          DROP_ADDRESS,
          1,
          connectedWallet,
          ERC6551_REGISTRY_ADDRESS,
          ERC6551_IMPLEMENTATION_ADDRESS,
          ERC6551_INIT_DATA,
        ],
        BigNumber.from(publicSalePrice).toHexString(),
        "Securely Pay on Oasis",
        "Pay with Crypto",
      )
      toast.success("purchased!")
      push("/checkout/success")
    } catch (err) {
      handleTxError(err)
    }
  }

  const value = useMemo(
    () => ({ 
        totalPrice,
        setTotalPrice,
        purchaseByPrivy
    }),
    [
        totalPrice,
        setTotalPrice,
        purchaseByPrivy
    ],
  )

  return <CheckOutContext.Provider value={value}>{children}</CheckOutContext.Provider>
}

export const useCheckOut = () => {
  const context = useContext(CheckOutContext)
  if (!context) {
    throw new Error("useCheckOut must be used within a CheckOutProvider")
  }
  return context
}

export default CheckOutProvider
