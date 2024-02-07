import { useState } from "react"
import Slider from "../../../../shared/Slider"
import Icon from "../../../../shared/Icon"
import ProductItem from "../../ProductItem"
import { useHomeProducts } from "../../../../providers/HomePageProvider"

const NewestSlides = () => {
  const [swiper, setSwiper] = useState(null)
  const { newestProducts } = useHomeProducts()
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
          spaceBetween: 40,
          grabCursor: true,
          onSwiper: (swiperCtrl) => setSwiper(swiperCtrl),
          breakpoints: {
            770: {
              slidesPerView: 5.2,
            },
            440: {
              initialSlide: 1,
            },
          },
        }}
      >
        {newestProducts.map((product, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <ProductItem key={i} data={product} />
        ))}
      </Slider>
    </div>
  )
}

export default NewestSlides
