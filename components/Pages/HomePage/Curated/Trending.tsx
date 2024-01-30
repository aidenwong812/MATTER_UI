import useIsMobile from "../../../../hooks/useIsMobile"
import TrendingList from "../TrendingList/TrendingList"
import TrendingSlides from "./TrendingSlides"

const Trending = () => {
  const isMobile = useIsMobile()

  return (
    <div className="mt-[40px] pt-[40px] border-t-gray_3 border-t px-[10px] md:px-0">
      <p className="text-gray_6 text-[16px] leading-[100%] tracking-[-0.4px]">This Month</p>
      <p className="text-black md:text-gray_8 text-[16px] md:text-[28px] leading-[120%] tracking-[-0.168px] mt-[12px]">
        Trending On Matter
      </p>
      {isMobile ? <TrendingList /> : <TrendingSlides />}
    </div>
  )
}

export default Trending
