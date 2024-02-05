import { formatEther } from "viem"
import SellerName from "../../SellerName"
import useEthPrice from "../../../hooks/useEthPrice"
import { useProduct } from "../../../providers/ProductProvider"

const ProductDetail = () => {
  const { productData } = useProduct()
  const ethPrice = productData && formatEther(productData.price as any).toString()
  const { getUsdConversion } = useEthPrice()

  return (
    <div className="md:col-span-3 py-[35px] md:px-[24px]">
      <p className="text-[16px] font-[400] leading-[100%] tracking-[-0.4px]">
        {productData?.title || "Category"}
      </p>
      <p className="text-[28px] tracking-[-0.168px] font-[400] leading-[120%]">
        {productData?.title || "Item Name"}
      </p>
      <SellerName className="my-[16px]" name={productData?.sellerName} />
      <p className="text-[16px] leading-[100%] tracking-[-0.4px] font-[400] mb-[4px]">
        {" "}
        US ${getUsdConversion(ethPrice) || "00"}
      </p>
      <p className="text-[16px] leading-[100%] tracking-[-0.4px] font-[400]">
        ETH {ethPrice || "0.000"}
      </p>
      <p className="text-[16px] font-[400] leading-[150%] tracking-[-0.384px] mt-[30px]">
        {productData?.description}
      </p>
    </div>
  )
}

export default ProductDetail
