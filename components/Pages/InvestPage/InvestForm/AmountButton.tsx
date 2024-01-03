import { useInvest } from "../../../../providers/InvestProvider"

const AmountButton = ({ amount }) => {
  const { amount: selectedAmount, setAmount } = useInvest()
  const isSelectedAmount = selectedAmount === amount
  const isSelected = isSelectedAmount

  const handleClick = () => {
    setAmount(amount)
  }

  return (
    <button
      className={`rounded-full
              xl:w-[111px] lg:w-[88.8px] md:w-[66.6px]
              xl:h-[38px] lg:h-[30.4px] md:h-[22.8px]
              flex items-center justify-center
              ${
                isSelected
                  ? "bg-[#54B3C3] text-white"
                  : "bg-[#F0F8FA] dark:bg-[#1A2629] dark:text-white"
              }`}
      type="button"
      onClick={handleClick}
    >
      $ {amount}
    </button>
  )
}

export default AmountButton
