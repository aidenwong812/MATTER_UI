import { useRouter } from "next/router"
import { toast } from "react-toastify"
import handleTxError from "../lib/handleTxError"
import usePreparePrivyWallet from "./usePreparePrivyWallet"
import useErc20FixedPriceSaleStrategy from "./useErc20FixedPriceSaleStrategy"
import useUsdc from "./useUsdc"

const usePurchaseByPrivy = () => {
  const { push } = useRouter()
  const { prepare } = usePreparePrivyWallet()
  const { approveWithPrivy, balance, minterAllowance } = useUsdc()
  const { requestMintBatchByPrivy } = useErc20FixedPriceSaleStrategy()

  const purchaseByPrivy = async (cart, totalPrice) => {
    if (!cart) return

    if (!prepare()) return

    try {
      if (!balance) return
      const sufficientBalance = balance.gte(totalPrice)
      if (!sufficientBalance) {
        toast.error(`Insufficient balance. Total price is ${totalPrice}`)
        return
      }
      const sufficientAllowance = minterAllowance.gte(totalPrice)
      if (!sufficientAllowance) {
        toast.error(`Insufficient allowance. please sign initial tx to grant max allowance`)
        await approveWithPrivy()
      }
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
