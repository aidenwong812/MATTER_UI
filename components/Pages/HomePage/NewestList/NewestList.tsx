import ProductItem from "../../ProductItem"

const NewestList = () => (
  <div
    className="w-full grid grid-cols-2 md:grid-cols-5 
  gap-x-[10px] gap-y-[40px] md:gap-[40px] mt-[40px]"
  >
    {Array(10)
      .fill(0)
      .map((_, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <ProductItem key={i} />
      ))}
  </div>
)

export default NewestList
