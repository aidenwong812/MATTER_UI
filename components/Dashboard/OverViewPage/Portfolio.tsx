import AvailableRewards from "./AvailableRewards"
import MarketValue from "./MarketValue"
import MyFunds from "./MyFunds"

const Portfolio = () => (
  <div
    className="bg-[#277e9326]
  border-[1px] border-white md:border-[#ffffff1a]
  p-[10px] md:p-[20px] text-white
  rounded-[20px]"
  >
    <div
      className="w-full text-center
    font-poppins_bold text-[12px]
    pb-[10px]"
    >
      Portfolio
    </div>
    <div className="flex justify-between items-center">
      <p
        className="font-poppins_bold hidden md:block
      md:text-[12px] md:text-[19.2px] xl:text-[24px]"
      >
        My Portfolio
      </p>
      <AvailableRewards />
      <MarketValue />
      <MyFunds />
    </div>
  </div>
)

export default Portfolio
