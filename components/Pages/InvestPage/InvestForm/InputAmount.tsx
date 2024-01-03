import { useInvest } from "../../../../providers/InvestProvider"
import Input from "./Input"

const InputAmount = () => {
  const { amount, setAmount } = useInvest()

  return <Input label="Amount:" value={amount} setValue={setAmount} />
}

export default InputAmount
