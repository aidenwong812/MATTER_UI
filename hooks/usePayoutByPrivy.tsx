import { useRouter } from "next/router"
import { toast } from "react-toastify"
import handleTxError from "../lib/handleTxError"
import usePreparePrivyWallet from "./usePreparePrivyWallet"
import useUsdc from "./useUsdc"

const usePayoutByPrivy = () => {
  const { push } = useRouter()
  const { prepare } = usePreparePrivyWallet()
  const { payoutWithPrivy, balance } = useUsdc()

  const payoutByPrivy = async (address: string) => {
    if (!prepare()) return

    try {
      if (!balance) return

      const response = await payoutWithPrivy(address)

      const { error } = response as any
      if (error) {
        return
      }
      toast.success("Payout!")
      push("/dashboard")
    } catch (err) {
      handleTxError(err)
    }
  }

  return { payoutByPrivy }
}

export default usePayoutByPrivy
