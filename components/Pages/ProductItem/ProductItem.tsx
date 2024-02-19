import { useRouter } from "next/router"
import Image from "../../../shared/Image"
import SellerName from "../../SellerName"
import useProductImage from "../../../hooks/useProductImage"
import getProductSeller from "../../../lib/getProductSeller"

const ProductItem = ({ imageClasses = "", data = null }) => {
  const { imageUrl } = useProductImage(data?.cover)
  const { push } = useRouter()

  return (
    <button
      className="w-full flex flex-col h-full"
      type="button"
      onClick={() => push(`/product/${data.id}`)}
    >
      <Image
        alt="not found photo"
        link={imageUrl || "/images/product_placeholder.png"}
        blurLink={imageUrl || "/images/product_placeholder.png"}
        containerClasses={`w-full aspect-[1/1] md:aspect-[1/1] ${imageClasses}`}
        imageClasses="!object-cover"
      />
      <div className="w-full pl-[10px] md:pl-0">
        <p
          className="text-[14px] font-[400] leading-[120%] tracking-[-0.14px] mt-[12px]
        text-left"
        >
          {data?.productName}
        </p>
        <SellerName className="my-[4px]" name={`${getProductSeller(data)}`} />
        <p className="text-gray_6 text-[14px] font-[400] leading-[120%] tracking-[-0.14px] text-left">
          USD ${data?.priceInUsd}
        </p>
      </div>
    </button>
  )
}

export default ProductItem
