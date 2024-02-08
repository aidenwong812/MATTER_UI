import { useHomeProducts } from "../../../../providers/HomePageProvider"
import TrendingItem from "../TrendingItem"

const TrendingList = () => {
  const { trendingProducts } = useHomeProducts()

  return (
    <div
      className="w-full grid grid-cols-1 md:grid-cols-4 gap-x-[10px] gap-y-[40px] 
    md:gap-[40px] mt-[40px]"
    >
      {trendingProducts.map((product, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <TrendingItem i={i + 1} key={i} data={product} />
      ))}
    </div>
  )
}

export default TrendingList
