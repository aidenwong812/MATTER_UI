import { useEthPrice } from "@/providers/EthPriceProvider"
import Image from "../../../shared/Image"
import SellerName from "../../SellerName"
import useProductImage from "../../../hooks/useProductImage"

const ProductItem = ({ imageClasses = "", data = null }) => {
  const { imageUrl } = useProductImage(data?.cover)
  const { getEthConversion } = useEthPrice()

  const fullName =
    data?.customer?.firstName && data?.customer?.lastName
      ? `${data?.customer?.firstName} ${data?.customer?.lastName}`
      : `${data?.customer?.userName || ""}`

  return (
    <div className="w-full flex flex-col h-full">
      <Image
        alt="not found photo"
        link={imageUrl || "/images/product_placeholder.png"}
        blurLink={imageUrl || "/images/product_placeholder.png"}
        containerClasses={`w-full aspect-[1/1] md:aspect-[1/1] ${imageClasses}`}
        imageClasses="!object-cover"
      />
      <div className="w-full pl-[10px] md:pl-0">
        <p className="text-[14px] font-[400] leading-[120%] tracking-[-0.14px] mt-[12px]">
          {data?.productName}
        </p>
        <SellerName className="my-[4px]" name={`${fullName}`} />
        <p className="text-gray_6 text-[14px] font-[400] leading-[120%] tracking-[-0.14px]">
          USD ${data?.priceInUsd}
        </p>
        <p className="text-gray_6 text-[14px] font-[400] leading-[120%] tracking-[-0.14px]">
          ETH {getEthConversion(data?.priceInUsd)}
        </p>
      </div>
    </div>
  )
}

export default ProductItem
