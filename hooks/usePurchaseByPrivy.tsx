import { useMemo } from "react"
import { useRouter } from "next/router"
import { toast } from "react-toastify"
import handleTxError from "../lib/handleTxError"
import useConnectedWallet from "./useConnectedWallet"
import usePreparePrivyWallet from "./usePreparePrivyWallet"
import usePrivyMulticall from "./usePrivyMulticall"
import getMulticallFromCart from "../lib/getMulticallFromCart"
import getMintData from "../lib/zora/getMintData"

const usePurchaseByPrivy = () => {
  const { push } = useRouter()
  const { prepare } = usePreparePrivyWallet()
  const { aggregate3Value } = usePrivyMulticall()
  const { connectedWallet } = useConnectedWallet()
  const mintData = useMemo(() => getMintData(connectedWallet), [connectedWallet])

  const purchaseByPrivy = async (cart, totalPrice) => {
    if (!cart) return

    const calls = getMulticallFromCart(cart, mintData)
    if (!prepare()) return

    try {
      const response = await aggregate3Value(calls, totalPrice.toString())
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

  return { purchaseByPrivy }
}

export default usePurchaseByPrivy
