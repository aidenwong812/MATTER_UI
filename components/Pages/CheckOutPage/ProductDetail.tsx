import useProductImage from "@/hooks/useProductImage"
import Image from "@/shared/Image"
import Icon from "@/shared/Icon"
import getProductSeller from "@/lib/getProductSeller"
import { useEthPrice } from "@/providers/EthPriceProvider"

const ProductDetail = ({ data }) => {
  const { getEthConversion } = useEthPrice()
  const productData = data?.product
  const { imageUrl } = useProductImage(productData?.cover)

  return (
    <>
      <Image
        link={imageUrl || "/images/cart_item.png"}
        blurLink={imageUrl || "/images/cart_item.png"}
        containerClasses="w-[150px] aspect-[1/1]"
        alt="not found item"
      />
      <div className="flex flex-col justify-between">
        <div>
          <p className="text-[16px] text-black font-[400] tracking-[-0.6px] leading-[100%] pb-[8px]">
            {productData?.productCategory || "Item Name"}
          </p>
          <p className="text-[28px] text-black font-[400] tracking-[-0.168px] leading-[120%]">
            {productData?.productName || "Item Name"}
          </p>
        </div>
        <div className="flex gap-x-[5px] items-center">
          <Icon name="check" className="text-gray_6" size={16} />
          <p className="text-[14px] text-gray_6 font-[400] tracking-[-0.14px] leading-[120%]">
            {getProductSeller(data) || "Seller Name"}
          </p>
        </div>
        <div>
          <p className="text-[16px] text-black font-[400] tracking-[-0.4px] leading-[100%] pb-[8px]">
            US ${productData?.priceInUsd || "00"}
          </p>
          <p className="text-[16px] text-black font-[400] tracking-[-0.4px] leading-[100%]">
            ETH {getEthConversion(productData?.priceInUsd) || "0.000"}
          </p>
        </div>
      </div>
    </>
  )
}

export default ProductDetail
