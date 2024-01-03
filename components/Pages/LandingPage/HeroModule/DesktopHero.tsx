import { useState } from "react"
import { Pagination, Navigation, EffectCreative, Autoplay } from "swiper"
import InvestSlide from "../InvestSlide"
import RoadmapSlide from "../RoadmapSlide"
import Slider from "../../../../shared/Slider"
import { useTheme } from "../../../../providers/ThemeProvider"
import SlideItem from "./SlideItem"

const DesktopHero = () => {
  const { themeMode } = useTheme()
  const [swiper, setSwiper] = useState<any>(null)
  const [selectedIndex, setSelectedIndex] = useState(0)

  // eslint-disable-next-line react/jsx-key
  const slideItems = [<InvestSlide />, <RoadmapSlide />]

  const lightSlideBgs = [
    "bg-[url('/images/Landing/Hero/d_invest_bg.png')]",
    "bg-[url('/images/Landing/Hero/d_roadmap_light_bg.png')]",
  ]

  const darkSlideBgs = [
    "bg-[url('/images/Landing/Hero/d_invest_bg.png')]",
    "bg-[url('/images/Landing/Hero/d_roadmap_bg.png')]",
  ]

  const nextSlide = () => {
    if (selectedIndex === slideItems.length - 1) {
      return
    }
    swiper.slideTo(selectedIndex + 1)
  }

  const prevSlide = () => {
    if (selectedIndex === 0) return

    swiper.slideTo(selectedIndex - 1)
  }

  return (
    <div
      className={`${
        themeMode === "light" ? lightSlideBgs[selectedIndex] : darkSlideBgs[selectedIndex]
      }
      flex justify-center items-center
      min-h-screen w-screen pt-[98px]
      bg-[bottom_center]
      bg-cover`}
    >
      <Slider
        className="[&>.swiper-pagination]:!pointer-events-all
        [&>.swiper-pagination]:!bg-[#4848484f]
        [&>.swiper-pagination]:!w-fit
        [&>.swiper-pagination]:!left-[calc(50%-32px)]
        [&>.swiper-pagination]:!px-[10px]
        [&>.swiper-pagination]:!rounded-full
        !pb-[70px]"
        slideClassName="!flex !justify-center"
        sliderProps={{
          centeredSlides: true,
          grabCursor: true,
          onSlideChange: (swiperCtrl) => setSelectedIndex(swiperCtrl.realIndex),
          onSwiper(swiperCtrl) {
            setSwiper(swiperCtrl)
          },
          autoplay: {
            delay: 10000,
          },
          modules: [EffectCreative, Autoplay, Pagination, Navigation],
          pagination: {
            clickable: true,
          },
        }}
      >
        {slideItems.map((item, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <SlideItem key={i} nextSlide={nextSlide} prevSlide={prevSlide}>
            {item}
          </SlideItem>
        ))}
      </Slider>
    </div>
  )
}

export default DesktopHero
