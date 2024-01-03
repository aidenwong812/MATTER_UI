import { useRouter } from "next/router"
import Button from "../../../../shared/Button"
import Media from "../../../../shared/Media"
import FadeInWhenVisible from "../../../FadeInWhenVisible"
import useIsMobile from "../../../../hooks/useIsMobile"

const InvestModule = () => {
  const router = useRouter()
  const isMobile = useIsMobile()

  return (
    <div
      className="w-screen relative
            flex items-center justify-center 
            pb-[50px] md:pb-0"
    >
      <div
        className="absolute 
      md:left-0 md:bottom-[2px]
      right-0 bottom-[30px]"
      >
        <Media
          type="image"
          link={isMobile ? "/images/Fund/bottom_dot.png" : "/images/Fund/d_bottom_dot.png"}
          blurLink={isMobile ? "/images/Fund/bottom_dot.png" : "/images/Fund/d_bottom_dot.png"}
          containerClasses="xl:w-[187px] xl:h-[69px]
            lg:w-[149.6px] lg:w-[55.2px]
            md:w-[112.2px] md:h-[41.4px]
            w-[70px] h-[109px]"
        />
      </div>
      <div
        className="md:w-[768px] lg:w-[1024px] xl:w-[1280px]
                xl:py-[95px] lg:py-[76px] md:py-[57px]
                xl:px-[80px] lg:px-[64px] md:px-[48px]
                pt-[25px] pb-[10px] px-[20px]
                mx-[20px] md:mx-0
                w-full
                shadow-[0px_8px_8px_2px_#54b3c34f] dark:shadow-[0px_8px_8px_2px_#1B1B1C]
                xl:translate-y-[-185px] md:translate-y-[-148px] md:translate-y-[-111px]
                translate-y-[-50px]
                rounded-[10px] md:rounded-[20px]
                bg-white dark:bg-[#1A2629]"
      >
        <FadeInWhenVisible className="grid grid-cols-1 md:grid-cols-2">
          <div className="hidden md:flex items-center justify-center">
            <Media
              type="image"
              containerClasses="rounded-[20px]
                                xl:w-[378px] xl:h-[400px]
                                lg:w-[302.4px] lg:h-[320px]
                                md:w-[226.8px] md:h-[240px]
                                dark:shadow-[0px_2px_10px_2px_#1B1B1C]
                                overflow-hidden"
              link="/images/Fund/diamond.svg"
              blurLink="/images/Fund/diamond.png"
            />
          </div>
          <div className="flex flex-col">
            <pre
              className="text-[20px] samsungS8:text-[22px] xs:text-[24px] 
              lg:text-[32px] xl:text-[40px]
              font-poppins_bold text-[#484848] dark:text-white
              leading-[120%]"
            >
              {`Duis aute irure\ndolor in reprehenderit`}
            </pre>
            <pre
              className="text-[11px] samsungS8:text-[13px] xs:text-[15px]
              md:text-[10.8px] lg:text-[14.4px] xl:text-[18px]
              xl:py-[45px] lg:py-[36px] md:py-[27px]
              py-[20px]
              font-poppins text-[#484848] dark:text-white"
            >
              {isMobile
                ? `Lorem ipsum dolor sit amet, consectetur\nadipiscing elit, sed do eiusmod tempor\nincididunt ut labore et dolore magna\naliqua. Ut enim ad minim veniam, quis\nnostrud exercitation ullamco laboris nisi ut\naliquip ex ea commodo consequat.`
                : `Lorem ipsum dolor sit amet, consectetur\nadipiscing elit, sed do eiusmod tempor\nincididunt ut labore et dolore magna\naliqua. Ut enim ad minim veniam, quis\nnostrud exercitation ullamco laboris nisi ut\naliquip ex ea commodo consequat.`}
            </pre>
            <div className="flex justify-center md:justify-start">
              <Button
                id="invest_bt"
                className="xl:w-[136px] xl:h-[47px]
                lg:w-[148.8px] xl:h-[37.6px]
                md:w-[111.6px] md:h-[28.2px]
                w-[98.58px] h-[34.65px]
                border-[1px] border-[#54B3C3]
                rounded-full
                text-[14px] md:text-[10.8px] lg:text-[14.4px] xl:text-[18px]
                !text-[#54B3C3]
                font-poppins_semibold"
                pulseColor="#54B3C3"
                onClick={() => router.push("/invest")}
              >
                Invest
              </Button>
            </div>
            <div
              className="flex md:hidden items-center justify-center
            pt-[20px]"
            >
              <Media
                type="image"
                containerClasses="rounded-full
                                  w-[294px] h-[293px]
                                  overflow-hidden"
                link="/images/Fund/roadmap.svg"
                blurLink="/images/Fund/roadmap.png"
              />
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </div>
  )
}

export default InvestModule
