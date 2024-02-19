import { useRouter } from "next/router"
import useProductImage from "../../../../hooks/useProductImage"
import getProductSeller from "../../../../lib/getProductSeller"
import Image from "../../../../shared/Image"
import SellerName from "../../../SellerName"

const TrendingItem = ({ i, data = null }) => {
  const { imageUrl } = useProductImage(data?.cover)
  const { push } = useRouter()

  return (
    <button type="button" onClick={() => push(`/product/${data.id}`)}>
      <div className="flex justify-between md:justify-start items-center">
        <p
          className={`trending-number max-w-[132px] leading-[100%] tracking-[-6.25px] text-gray_3
        ${i > 9 ? "text-[150px]" : "text-[250px]"}`}
        >
          {i}
        </p>
        <Image
          link={imageUrl || "/images/trending.png"}
          blurLink={imageUrl || "/images/trending.png"}
          containerClasses="w-[230px] aspect-[1/1] ml-[-15px]"
          alt="not found icon"
        />
      </div>
      <div className="pl-[10px] md:pl-0">
        <p className="text-[14px] font-[400] leading-[120%] tracking-[-0.14px] mt-[12px] text-left">
          {data?.productName} / {data?.productType}
        </p>
        <SellerName className="my-[4px]" name={getProductSeller(data)} />
        <p className="text-gray_6 text-[14px] font-[400] leading-[120%] tracking-[-0.14px] text-left">
          USD ${data?.priceInUsd}
        </p>
      </div>
    </button>
  )
}

export default TrendingItem
