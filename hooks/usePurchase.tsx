import { MoonpayConfig } from "@privy-io/react-auth"
import { useMemo } from "react"
import { BigNumber } from "ethers"
import { useRouter } from "next/router"
import { toast } from "react-toastify"
import usePreparePrivyWallet from "./usePreparePrivyWallet"
import useEthPrice from "./useEthPrice"
import {
  BRAND_HEX,
  BRAND_THEME,
  CHAIN_ID,
  DROP_ADDRESS,
  ERC6551_IMPLEMENTATION_ADDRESS,
  ERC6551_INIT_DATA,
  ERC6551_REGISTRY_ADDRESS,
} from "../lib/consts"
import useConnectedWallet from "./useConnectedWallet"
import { useInvest } from "../providers/InvestProvider"
import useBalance from "./useBalance"
import usePrivySendTransaction from "./usePrivySendTransaction"
import abi from "../lib/abi/minter.json"
import useSaleStatus from "./useSaleStatus"

const usePurchase = () => {
  const { prepare } = usePreparePrivyWallet()
  const { getEthConversion } = useEthPrice()
  const { privyWallet, connectedWallet } = useConnectedWallet()
  const { amount } = useInvest()
  const { balance } = useBalance()
  const ethConvertedAmount = useMemo(() => getEthConversion(amount), [amount, getEthConversion])
  const hasBalanceToPurchase = ethConvertedAmount < parseFloat(balance)
  const { sendTransaction } = usePrivySendTransaction()
  const { publicSalePrice } = useSaleStatus()
  const { push } = useRouter()

  const fund = async () => {
    const fundWalletConfig = {
      currencyCode: "ETH_ETHEREUM",
      quoteCurrencyAmount: parseFloat(getEthConversion(amount).toFixed(4)),
      uiConfig: { accentColor: BRAND_HEX, theme: BRAND_THEME },
    } as MoonpayConfig
    await privyWallet.fund({ config: fundWalletConfig })
  }

  const purchase = async () => {
    if (!prepare()) return
    if (!hasBalanceToPurchase) {
      await fund()
      return
    }
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
      "Invest",
    )
    toast.success("invested! setting up profile...")
    push("/dashboard")
  }

  return { purchase }
}

export default usePurchase
