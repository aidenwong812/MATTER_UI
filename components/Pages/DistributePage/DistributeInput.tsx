import { useDistributeProvider } from "../../../providers/DistributeProvider"
import Input from "../InvestPage/InvestForm/Input"

const DistributeInput = () => {
  const { amount, setAmount } = useDistributeProvider()

  return <Input label="Amount (USDC):" setValue={setAmount} value={amount} />
}

export default DistributeInput
