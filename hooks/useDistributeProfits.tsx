import { useState } from "react"
import { toast } from "react-toastify"
import handleTxError from "../lib/handleTxError"
import useWithdrawForAll from "./useWithdrawForAll"
import sendDistributionEmail from "../lib/sendDistributionEmail"
import useCheckNetwork from "./useCheckNetwork"
import useUpdateSplit from "./useUpdateSplit"
import useUsdc from "./useUsdc"

const useDistributeProfits = () => {
  const [step, setStep] = useState(0)
  const { withdrawForAll } = useWithdrawForAll()
  const { checkNetwork } = useCheckNetwork()
  const { updateAndDistributeERC20, smartWallets } = useUpdateSplit()
  const { amount, setAmount, sendUsdcToSplit } = useUsdc()
  const [errorText, setErrorText] = useState("")

  const distribute = async () => {
    if (!checkNetwork()) return
    setErrorText("")
    try {
      if (step <= 1) {
        setStep(1)
        await sendUsdcToSplit()
      }
      if (step <= 2) {
        setStep(2)
        await updateAndDistributeERC20()
      }
      if (step <= 3) {
        setStep(3)
        await withdrawForAll(smartWallets)
        const payoutPerWallet = parseFloat(amount) / smartWallets.length
        await sendDistributionEmail(payoutPerWallet)
      }
      toast.success("distributed successfully")
      setStep(0)
    } catch (err) {
      const error = handleTxError(err)
      setErrorText(error)
    }
  }

  return { amount, distribute, setAmount, step, errorText }
}

export default useDistributeProfits
