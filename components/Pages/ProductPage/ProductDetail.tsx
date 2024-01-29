import { formatEther } from "viem"
import SellerName from "../../SellerName"
import { demoProduct } from "./demoProduct"
import useEthPrice from "../../../hooks/useEthPrice"

const ProductDetail = () => {
  const ethPrice = formatEther(demoProduct.price as any).toString()
  const { getUsdConversion } = useEthPrice()

  return (
    <div className="md:col-span-3 py-[35px] md:px-[24px]">
      <p className="text-[16px] font-[400] leading-[100%] tracking-[-0.4px]">
        {demoProduct.title || "Category"}
      </p>
      <p className="text-[28px] tracking-[-0.168px] font-[400] leading-[120%]">
        {demoProduct.title || "Item Name"}
      </p>
      <SellerName className="my-[16px]" name={demoProduct.sellerName} />
      <p className="text-[16px] leading-[100%] tracking-[-0.4px] font-[400] mb-[4px]">
        {" "}
        US ${getUsdConversion(ethPrice) || "00"}
      </p>
      <p className="text-[16px] leading-[100%] tracking-[-0.4px] font-[400]">
        ETH {ethPrice || "0.000"}
      </p>
      <p className="text-[16px] font-[400] leading-[150%] tracking-[-0.384px] mt-[30px]">
        {demoProduct.description}
      </p>
    </div>
  )
}

export default ProductDetail
