import TrendingList from "../TrendingList"

const Trending = () => (
  <div className="pt-[40px] border-t border-gray_3 px-[18px]">
    <p className="text-gray_6 text-[16px] leading-[100%] tracking-[-0.4px]">This Month</p>
    <p className="text-black md:text-gray_8 text-[16px] md:text-[28px] leading-[120%] tracking-[-0.168px] mt-[12px]">
      Trending On Matter
    </p>
    <TrendingList />
  </div>
)

export default Trending
