import Media from "../../../../shared/Media"

const SlideItem = ({ children, nextSlide, prevSlide }) => (
  <div
    className="flex items-center 
    xl:gap-x-[30px] lg:gap-x-[24px] md:gap-x-[18px]
    md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px]"
  >
    <button type="button" onClick={prevSlide}>
      <Media
        type="image"
        link="/images/Landing/Hero/prev.png"
        blurLink="/images/Landing/Hero/prev.png"
        containerClasses="xl:w-[48px] lg:w-[38.4px] md:w-[28.8px] aspect-[1/1]"
      />
    </button>
    {children}
    <button type="button" onClick={nextSlide}>
      <Media
        type="image"
        link="/images/Landing/Hero/next.png"
        blurLink="/images/Landing/Hero/next.png"
        containerClasses="xl:w-[48px] lg:w-[38.4px] md:w-[28.8px] aspect-[1/1]"
      />
    </button>
  </div>
)

export default SlideItem
