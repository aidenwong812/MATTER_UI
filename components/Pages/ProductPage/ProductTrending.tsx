import { useProduct } from "@/providers/ProductProvider"
import ProductItem from "../ProductItem"

const ProductTrending = () => {
  const { newestProducts } = useProduct()

  return (
    <div className="mt-[40px] col-span-10">
      <p className="text-[16px] md:text-[28px] font-[400] tracking-[-0.168px] leading-[120%] mb-[40px] md:capitalize">
        You might also like
      </p>
      <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-[40px]">
        {newestProducts.map((product, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <ProductItem key={i} data={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductTrending
