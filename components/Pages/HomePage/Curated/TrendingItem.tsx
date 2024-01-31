import Image from "../../../../shared/Image"
import SellerName from "../../../SellerName"

const TrendingItem = ({ i }) => (
  <div>
    <div className="flex items-center">
      <p className="hidden md:block trending-number leading-[100%] tracking-[-6.25px] text-[250px] text-gray_3">
        {i}
      </p>
      <Image
        link="/images/trending.png"
        blurLink="/images/trending.png"
        containerClasses="w-[230px] aspect-[1/1] md:ml-[-15px]"
        alt="not found icon"
      />
    </div>
    <div className="pl-[10px] md:pl-0">
      <p className="max-w-[156px] md:max-w-auto text-[14px] font-[400] leading-[120%] tracking-[-0.14px] mt-[12px]">
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
