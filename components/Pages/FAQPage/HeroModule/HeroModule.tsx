import useIsMobile from "../../../../hooks/useIsMobile"
import Media from "../../../../shared/Media"

const HeroModule = () => {
  const isMobile = useIsMobile()

  return (
    <div
      className="w-screen relative
          flex flex-col items-center
          pt-[64px] md:pt-0 md:mt-[98px]"
    >
      {isMobile && (
        <>
          <Media
            type="image"
            link="/images/FAQ/top_dot_bg.png"
            blurLink="/images/FAQ/top_dot_bg.png"
            containerClasses="w-[110px] h-[97px]
                  !absolute left-[0px] top-[-10px]
                  !z-[10]"
          />
          <Media
            type="image"
            link="/images/FAQ/bottom_dot_bg.png"
            blurLink="/images/FAQ/bottom_dot_bg.png"
            containerClasses="w-[56px] h-[109px]
                  right-0 bottom-[-60px] !absolute
                  !z-[10]"
          />
        </>
      )}
      <div
        className="w-screen relative
              bg-[url('/images/FAQ/d_bg.png')]
              bg-cover
              bg-no-repeat
              bg-center
              flex justify-center"
      >
        <div
          className="md:w-[768px] lg:w-[1024px] xl:w-[1280px]
          xl:pt-[125px] lg:pt-[100px] md:pt-[75px]
          xl:pb-[125px] lg:pb-[100px] md:pb-[75px]
          w-full px-[20px] py-[90px]"
        >
          <pre
            className="font-poppins_bold
            text-[30px]
            xl:text-[64px] lg:text-[51.2px] md:text-[38.4px]
            text-white leading-[120%]"
            data-aos="fade-up"
          >
            {`Frequently\nAsked\nQuestion`}
          </pre>
        </div>
      </div>
    </div>
  )
}

export default HeroModule
