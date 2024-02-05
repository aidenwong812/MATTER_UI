import { getIpfsLink } from "onchain-magic"
import { useProduct } from "../../../providers/ProductProvider"
import Image from "../../../shared/Image"

const ProductPhoto = () => {
  const { productData } = useProduct()

  return (
    <div className="md:col-span-4">
      <Image
        link={getIpfsLink(productData?.cover)}
        blurLink={getIpfsLink(productData?.cover)}
        containerClasses="w-full aspect-[1/1]"
        alt="not found photo"
      />
    </div>
  )
}

export default ProductPhoto
