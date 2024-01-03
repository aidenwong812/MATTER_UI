import Media from "../../../../shared/Media"
import InvestForm from "../InvestForm"
import InvestInfo from "../InvestInfo"

const InvestModule = () => (
  <div className="w-full relative">
    <div className="absolute left-0 top-0">
      <Media
        type="image"
        link="/images/Invest/d_top_dot.png"
        blurLink="/images/Invest/d_bottom.dot.png"
        containerClasses="xl:w-[101px] lg:w-[80.8px] md:w-[60.6px] 
        xl:h-[233px] lg:h-[186.4px] md:h-[139.8px]"
      />
    </div>
    <div className="absolute bottom-0 right-0">
      <Media
        type="image"
        link="/images/Invest/d_bottom_dot.png"
        blurLink="/images/Invest/d_bottom_dot.png"
        containerClasses="xl:w-[105px] lg:w-[84px] md:w-[63px]
        xl:h-[233px] lg:h-[186.4px] md:h-[139.8px]"
      />
    </div>
    <div
      className="w-full 
    xl:p-[50px] lg:p-[40px] md:p-[30px]
    relative z-[2]"
    >
      <div
        className="grid grid-cols-12 bg-[#F8F8F8] dark:bg-[#1A2629]
       xl:!rounded-[20px] lg:!rounded-[16px] md:!rounded-[12px]"
      >
        <InvestInfo />
        <InvestForm />
      </div>
    </div>
  </div>
)

export default InvestModule
