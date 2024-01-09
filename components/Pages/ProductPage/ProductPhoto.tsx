import Image from "../../../shared/Image"

const ProductPhoto = () => (
  <div className="md:col-span-4">
    <Image
      link="/images/product_placeholder.png"
      blurLink="/images/product_placeholder.png"
      containerClasses="w-full aspect-[1/1]"
      alt="not found photo"
    />
  </div>
)

export default ProductPhoto
