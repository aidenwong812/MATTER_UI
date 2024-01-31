import TrendingItem from "./TrendingItem"

const TrendingList = () => (
  <div className="w-full grid grid-cols-2 gap-x-[10px] gap-y-[40px] mt-[40px]">
    {Array(10)
      .fill(0)
      .map((_, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <TrendingItem i={i + 1} key={i} />
      ))}
  </div>
)

export default TrendingList
