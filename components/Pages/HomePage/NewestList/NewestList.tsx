import { useHomeProducts } from "../../../../providers/HomePageProvider"
import ProductItem from "../../ProductItem"

const NewestList = () => {
  const { newestProducts } = useHomeProducts()

  return (
    <div
      className="w-full grid grid-cols-2 md:grid-cols-5 
    gap-x-[10px] gap-y-[40px] md:gap-[40px] mt-[40px]"
    >
      {newestProducts.map((product, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <ProductItem key={i} data={product} />
      ))}
    </div>
  )
}

export default NewestList
