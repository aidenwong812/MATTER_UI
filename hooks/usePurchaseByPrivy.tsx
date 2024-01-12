import { useMemo, useState } from "react"
import { useRouter } from "next/router"
import { Interface } from "ethers/lib/utils"
import { toast } from "react-toastify"
import { BigNumber } from "ethers"
import handleTxError from "../lib/handleTxError"
import useConnectedWallet from "./useConnectedWallet"
import usePreparePrivyWallet from "./usePreparePrivyWallet"
import { MINT_REFERRAL } from "../lib/consts"
import usePrivyMulticall from "./usePrivyMulticall"
import { demoProducts } from "../components/Pages/CheckOutPage/demoProducts"
import zora721Abi from "../lib/abi/zora721drop.json"

const usePurchaseByPrivy = () => {
  const { push } = useRouter()
  const { prepare } = usePreparePrivyWallet()
  const { aggregate3Value } = usePrivyMulticall()
  const { connectedWallet } = useConnectedWallet()
  const mintData = useMemo(
    () =>
      connectedWallet &&
      new Interface(zora721Abi).encodeFunctionData("mintWithRewards", [
        connectedWallet,
        1,
        "matter comments",
        MINT_REFERRAL,
      ]),
    [connectedWallet],
  )
  const calls = demoProducts.map((product) => ({
    target: product.contractAddress, // The ERC1155 contract address
    allowFailure: false, // Set to true if you want to allow this call to fail without reverting the entire transaction
    value: BigNumber.from(product.price), // Value in wei to send with this call, adjust as needed
    callData: mintData,
  }))
  const totalPrice = calls.reduce((acc, call) => acc.add(call.value), BigNumber.from(0))

  const purchaseByPrivy = async () => {
    console.log("SWEETS USE MULTICALL", connectedWallet)
    if (!prepare()) return
    try {
      const response = await aggregate3Value(calls, totalPrice.toString())
      console.log("SWEETS RESPONSE", response)
      const { error } = response as any
      if (error) {
        return
      }
      toast.success("purchased!")
      push("/checkout/success")
    } catch (err) {
      handleTxError(err)
    }
  }

  return { purchaseByPrivy, totalPrice }
}

export default usePurchaseByPrivy
