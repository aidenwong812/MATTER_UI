import { useMemo, useState } from "react"
import { useRouter } from "next/router"
import { Interface } from "ethers/lib/utils"
import { MoonpayConfig } from "@privy-io/react-auth"
import { toast } from "react-toastify"
import { BigNumber, utils } from "ethers"
import handleTxError from "../lib/handleTxError"
import { useUserProvider } from "../providers/UserProvider"
import useBalance from "./useBalance"
import useConnectedWallet from "./useConnectedWallet"
import usePreparePrivyWallet from "./usePreparePrivyWallet"
import { BRAND_HEX, BRAND_THEME, MINT_REFERRAL } from "../lib/consts"
import usePrivyMulticall from "./usePrivyMulticall"
import { demoProducts } from "../components/Pages/CheckOutPage/demoProducts"
import zora721Abi from "../lib/abi/zora721drop.json"

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
      const mintData = new Interface(zora721Abi).encodeFunctionData("mintWithRewards", [
        connectedWallet,
        1,
        "matter comments",
        MINT_REFERRAL,
      ])

      const mintWithRewardsCall = {
        target: demoProducts[0].contractAddress, // The ERC1155 contract address
        allowFailure: true, // Set to true if you want to allow this call to fail without reverting the entire transaction
        value: BigNumber.from(demoProducts[0].price), // Value in wei to send with this call, adjust as needed
        callData: mintData,
      }
      const calls = [mintWithRewardsCall]

      const response = await aggregate3Value(calls, demoProducts[0].price)
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
