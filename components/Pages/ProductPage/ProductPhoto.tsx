import { useProduct } from "../../../providers/ProductProvider"
import Image from "../../../shared/Image"
import useProductImage from "../../../hooks/useProductImage"

const ProductPhoto = () => {
  const { productData } = useProduct()
  const { imageUrl } = useProductImage(productData?.cover)
  return (
    <div className="md:col-span-4">
      <Image
        link={imageUrl || "/images/product_placeholder.png"}
        blurLink={imageUrl || "/images/product_placeholder.png"}
        containerClasses="w-full aspect-[1/1]"
        alt="not found photo"
      />
    </div>
  )
}

export default ProductPhoto
