import { useState } from "react"
import Slider from "../../../../shared/Slider"
import TrendingItem from "../TrendingItem/TrendingItem"
import Icon from "../../../../shared/Icon"
import { useHomeProducts } from "../../../../providers/HomePageProvider"

const TrendingSlides = () => {
  const [swiper, setSwiper] = useState(null)
  const { trendingProducts } = useHomeProducts()

  const prevSlide = () => swiper.slidePrev()
  const nextSlide = () => swiper.slideNext()

  return (
    <div className="w-full">
      <div className="my-[40px] flex gap-[20px] items-center">
        <button type="button" onClick={prevSlide}>
          <Icon name="arrowLeft" className="text-black" size={16} />
        </button>
        <button type="button" onClick={nextSlide}>
          <Icon name="arrowRight" className="text-black" size={16} />
        </button>
      </div>
      <Slider
        className="!overflow-visible"
        sliderProps={{
          initialSlide: 0,
          slidesPerView: 1,
          grabCursor: true,
          onSwiper: (swiperCtrl) => setSwiper(swiperCtrl),
          breakpoints: {
            770: {
              slidesPerView: 3.5,
            },
            440: {
              initialSlide: 1,
            },
          },
        }}
      >
        {trendingProducts.map((product, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <TrendingItem i={i + 1} key={i} data={product} />
        ))}
      </Slider>
    </div>
  )
}

export default TrendingSlides
