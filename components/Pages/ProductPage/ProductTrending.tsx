import ProductItem from "../ProductItem"

const ProductTrending = () => (
  <div className="mt-[40px] col-span-10">
    <p className="text-[16px] md:text-[28px] font-[400] tracking-[-0.168px] leading-[120%] mb-[40px]">
      You Might Also Like
    </p>
    <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-[40px]">
      {Array(10)
        .fill(0)
        .map((_, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <ProductItem key={i} />
        ))}
    </div>
  </div>
)

export default ProductTrending
