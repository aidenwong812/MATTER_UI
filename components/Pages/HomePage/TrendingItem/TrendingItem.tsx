import Image from "../../../../shared/Image"
import SellerName from "../../../SellerName"

const TrendingItem = ({ i }) => (
  <div>
    <div className="flex justify-between md:justify-start items-center">
      <p
        className={`trending-number max-w-[132px] leading-[100%] tracking-[-6.25px] text-gray_3
      ${i > 9 ? "text-[150px]" : "text-[250px]"}`}
      >
        {i}
      </p>
      <Image
        link="/images/trending.png"
        blurLink="/images/trending.png"
        containerClasses="w-[230px] aspect-[1/1] ml-[-15px]"
        alt="not found icon"
      />
    </div>
    <div className="pl-[10px] md:pl-0">
      <p className="text-[14px] font-[400] leading-[120%] tracking-[-0.14px] mt-[12px]">
        Item Name / Service Name
      </p>
      <SellerName className="my-[4px]" />
      <p className="text-gray_6 text-[14px] font-[400] leading-[120%] tracking-[-0.14px]">US$120</p>
      <p className="text-gray_6 text-[14px] font-[400] leading-[120%] tracking-[-0.14px]">
        ETH 0.0002
      </p>
    </div>
  </div>
)

export default TrendingItem
