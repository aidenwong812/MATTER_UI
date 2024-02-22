import { useProduct } from "@/providers/ProductProvider"
import SellerName from "../../SellerName"
import getProductSeller from "../../../lib/getProductSeller"

const ProductDetail = () => {
  const { productData } = useProduct()

  return (
    <div className="md:col-span-3 py-[35px] md:px-[24px]">
      <p className="text-[16px] font-[400] leading-[100%] tracking-[-0.4px]">
        {productData?.productCategory || "Category"}
      </p>
      <p className="text-[28px] tracking-[-0.168px] font-[400] leading-[120%]">
        {productData?.productName || "Item Name"}
      </p>
      <SellerName className="my-[16px]" name={getProductSeller(productData?.customer)} />
      <p className="text-[16px] leading-[100%] tracking-[-0.4px] font-[400] mb-[4px]">
        {" "}
        USD ${productData?.priceInUsd || "00"}
      </p>
      <p className="text-[16px] font-[400] leading-[150%] tracking-[-0.384px] mt-[30px]">
        {productData?.description}
      </p>
    </div>
  )
}

export default ProductDetail
