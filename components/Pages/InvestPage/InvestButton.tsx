import Button from "../../../shared/Button"
import usePurchase from "../../../hooks/usePurchase"

const InvestButton = () => {
  const { purchase } = usePurchase()

  const handleClick = async () => {
    await purchase()
  }

  return (
    <Button
      id="invest_amount_btn"
      className="w-full rounded-full
                xl:h-[47px] lg:h-[37.6px] md:h-[28.2px]
                text-white
                font-poppins_bold
                md:text-[10.8px] lg:text-[14.4px] xl:text-[18px]
                bg-[#54B3C3]"
      onClick={handleClick}
    >
      Continue
    </Button>
  )
}

export default InvestButton
