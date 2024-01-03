import AmountButton from "./AmountButton"

const AmountSelect = () => (
  <div
    className="grid grid-cols-3
        font-poppins text-[#484848]
        xl:gap-x-[20px] lg:gap-x-[16px] md:gap-x-[16px]
        cursor-pointer
        md:text-[10.8px] lg:text-[14.4px] xl:text-[18px]
        xl:py-[30px] lg:py-[24px] md:py-[18px]"
  >
    {["1500", "3000", "4500"].map((amount) => (
      <AmountButton amount={amount} key={amount} />
    ))}
  </div>
)

export default AmountSelect
