import { useMemo } from "react"
import { useRouter } from "next/router"
import { toast } from "react-toastify"
import handleTxError from "../lib/handleTxError"
import useConnectedWallet from "./useConnectedWallet"
import usePreparePrivyWallet from "./usePreparePrivyWallet"
import usePrivyMulticall from "./usePrivyMulticall"
import getMintData from "../lib/zora/getMintData"
import useErc20FixedPriceSaleStrategy from "./useErc20FixedPriceSaleStrategy"

const usePurchaseByPrivy = () => {
  const { push } = useRouter()
  const { prepare } = usePreparePrivyWallet()
  const { aggregate3Value } = usePrivyMulticall()
  const { connectedWallet } = useConnectedWallet()
  const mintData = useMemo(() => getMintData(connectedWallet), [connectedWallet])
  const { requestMintBatchByPrivy } = useErc20FixedPriceSaleStrategy()

  const purchaseByPrivy = async (cart, totalPrice) => {
    if (!cart) return

    if (!prepare()) return
    try {
      // TODO: one tx to ERC20FixedPriceSaleStrategy
      const response = await requestMintBatchByPrivy()
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
