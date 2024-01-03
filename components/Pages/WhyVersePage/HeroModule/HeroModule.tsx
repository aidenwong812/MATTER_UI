import useIsMobile from "../../../../hooks/useIsMobile"
import Media from "../../../../shared/Media"

const HeroModule = () => {
  const isMobile = useIsMobile()

  return (
    <div
      className="w-screen relative
      bg-[url('/images/WhyVerse/m_bg.png')] md:bg-[url('/images/WhyVerse/d_bg.png')]
      bg-cover
      bg-no-repeat
      bg-center
      flex justify-center"
    >
      <div
        className="w-screen relative
        bg-[url('/images/WhyVerse/m_bg.png')] md:bg-[url('/images/WhyVerse/d_bg.png')]
        bg-cover
        bg-no-repeat
        bg-center
        flex justify-center"
      >
        {isMobile ? (
          <>
            <Media
              type="image"
              link="/images/WhyVerse/top_dot_bg.png"
              blurLink="/images/WhyVerse/top_dot_bg.png"
              containerClasses="w-[110px] h-[97px]
                !absolute left-[0px] top-[-70px]"
            />
            <Media
              type="image"
              link="/images/WhyVerse/bottom_dot_bg.png"
              blurLink="/images/WhyVerse/bottom_dot_bg.png"
              containerClasses="w-[56px] h-[109px]
                right-0 bottom-[-60px] !absolute"
            />
          </>
        ) : (
          <div className="absolute right-0 top-[5px]">
            <Media
              type="image"
              link="/images/WhyVerse/d_top_dot.png"
              blurLink="/images/WhyVerse/d_top_dot.png"
              containerClasses="xl:w-[202px] xl:h-[478px]
          lg:w-[161.6px] lg:h-[382.4px]
          md:w-[121.2px] md:h-[286.8px]"
            />
          </div>
        )}
        <div
          className="md:w-[768px] lg:w-[1024px] xl:w-[1280px]
                  xl:pt-[125px] lg:pt-[100px] md:pt-[75px]
                  xl:pb-[300px] lg:pb-[240px] md:pb-[180px]
                  w-full px-[20px] pt-[50px] pb-[130px]"
        >
          <pre
            className="font-poppins_bold
            text-[24px] samsungS8:text-[28px] xs:text-[30px]
            xl:text-[64px] lg:text-[51.2px] md:text-[38.4px]
            text-white leading-[120%]"
            data-aos="fade-up"
          >
            {isMobile ? `Why Financial Verse` : `Why Financial\nVerse`}
          </pre>
          <pre
            className="font-poppins
            text-[12.5px] samsungS8:text-[14.5px] xs:text-[16px]
            md:text-[10.8px] lg:text-[14.4px] xl:text-[18px]
            text-white
            xl:pt-[45px] lg:pt-[36px] md:pt-[27px] pt-[20px]"
            data-aos="fade-up"
          >
            {isMobile
              ? `Lorem ipsum dolor sit amet, consectetur\nadipiscing elit, sed do eiusmod tempor\nincididunt ut labore et dolore magna aliqua.`
              : `Lorem ipsum dolor sit amet, consectetur adipiscing elit,\nsed do eiusmod tempor incididunt ut labore et\ndolore magna aliqua.`}
          </pre>
        </div>
      </div>
    </div>
  )
}

export default HeroModule
