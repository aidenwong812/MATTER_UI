import Image from "../../../shared/Image"
import SellerName from "../../SellerName"

const ProductItem = () => (
  <div className="w-full">
    <Image
      alt="not found photo"
      link="/images/product_placeholder.png"
      blurLink="/images/product_placeholder.png"
      containerClasses="w-full aspect-[1/1]"
    />
    <p className="text-[14px] font-[400] leading-[120%] tracking-[-0.14px] mt-[12px]">Item Name</p>
    <SellerName className="my-[4px]" />
    <p className="text-gray_6 text-[14px] font-[400] leading-[120%] tracking-[-0.14px]">US$120</p>
    <p className="text-gray_6 text-[14px] font-[400] leading-[120%] tracking-[-0.14px]">
      ETH 0.0002
    </p>
  </div>
)

export default ProductItem