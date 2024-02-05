import Balance from "./Balance"
import Buttons from "./Buttons"

const TopSection = () => (
  <div
    className="flex flex-col md:flex-row md:justify-between gap-y-[20px] mt-[20px]
  md:px-[24px] lg:px-[32px] xl:px-[40px]"
  >
    <Balance />
    <Buttons />
  </div>
)

export default TopSection
