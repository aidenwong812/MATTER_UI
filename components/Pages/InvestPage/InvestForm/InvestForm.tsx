import CTAButton from "./CTAButton"
import AmountSelect from "./AmountSelect"
import InputAmount from "./InputAmount"

const InvestForm = () => (
  <div
    className="col-span-5 bg-white dark:bg-[#10181A]
        xl:!rounded-[20px] lg:!rounded-[16px] md:!rounded-[12px]
        xl:p-[40px] lg:p-[32px] md:p-[24px]
        shadow-[0px_8px_8px_2px_#1e6cd826] dark:shadow-[0px_8px_8px_2px_#122840]"
  >
    <p
      className="text-[#54B3C3] font-poppins_medium
    md:text-[14.4px] lg:text-[19.2px] xl:text-[24px]"
    >
      Input Investment
    </p>
    <InputAmount />
    <AmountSelect />
    <CTAButton />
  </div>
)

export default InvestForm
