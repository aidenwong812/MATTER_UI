import { useRouter } from "next/router"
import useIsMobile from "../../../../hooks/useIsMobile"
import { useTheme } from "../../../../providers/ThemeProvider"
import Button from "../../../../shared/Button"
import Media from "../../../../shared/Media"
import Content from "../../../Layout/Content"

const AboutModule = () => {
  const { themeMode } = useTheme()
  const isMobile = useIsMobile()
  const router = useRouter()

  return (
    <div
      className="w-screen 
          py-[40px] md:py-0 md:h-screen
          flex justify-center items-center"
    >
      <Content className="px-[25px] md:px-0 !relative">
        <Media
          type="image"
          link="/images/Landing/About/m_dot_bg.png"
          blurLink="/images/Landing/About/m_dot_bg.png"
          containerClasses="xs:w-[61px]
          samsungS8:w-[45px] aspect-[61/109]
          w-[35px]
          !absolute top-[7px] right-0"
        />
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col">
            <p
              className="uppercase 
              text-[20px] md:text-[19.2px] xl:text-[24px]          
              font-poppins_bold
              text-[#484848] dark:text-white
              pb-[25px] md:pb-[50px]"
              data-aos="fade-up"
            >
              About financial verse
            </p>
            <pre
              className="text-[24px] md:text-[24px] lg:text-[32px] xl:text-[40px]
                          font-poppins_bold
                          leading-[120%] 
                          pb-[30px] md:pb-[60px]
                          text-[#484848] dark:text-white"
              data-aos="fade-up"
            >{`Duis aute iruer\ndolor in reprehenderit`}</pre>
            <pre
              className="text-[11px] samsungS8:text-[13px] xs:text-[14.6px]
                          md:text-[10.8px] lg:text-[14.4px] xl:text-[18px]
                          font-poppins text-[#484848] dark:text-white
                          pb-[25px] md:pb-[50px]"
              data-aos="fade-up"
            >
              {isMobile
                ? `Lorem ipsum dolor sit amet, consectetur\nadipiscing elit, sed do eiusmod tempor\nincididunt ut labore et dolore magna aliqua. Ut\nenim ad minim veniam, quis nostrud\nexercitation ullamco laboris nisi ut aliquip ex ea\ncommodo consequat.`
                : `Lorem ipsum dolor sit amet, consectetur\nadipiscing elit, sed do eiusmod tempor\nincididunt ut labore et dolore magna\naliqua. Ut enim ad minim veniam, quis\nnostrud exercitation ullamco laboris nisi ut\naliquip ex ea commodo consequat.`}
            </pre>
            <Button
              id="find_out_more"
              className="md:w-[207px] md:h-[47px]
                        w-[132.6px] h-[35px]
                              border-[1px] border-[#54B3C3]
                              font-poppins_semibold
                              text-[14px] md:text-[10.8px] lg:text-[14.4px] xl:text-[18px]
                              rounded-full !text-[#54B3C3]
                              bg-[white] dark:bg-transparent"
              pulseColor="#54B3C3"
              data-aos="fade-up"
              onClick={() => router.push("/invest")}
            >
              {isMobile ? "Invest Now" : "Find Out More"}
            </Button>
          </div>
          <div data-aos="fade-up" className="mt-[25px] md:mt-0">
            <Media
              type="image"
              link={
                // eslint-disable-next-line no-nested-ternary
                themeMode === "light"
                  ? isMobile
                    ? "/images/Landing/About/m_cards.png"
                    : "/images/Landing/About/cards.png"
                  : isMobile
                  ? "/images/Landing/About/m_dark_cards.png"
                  : "/images/Landing/About/dark_cards.png"
              }
              blurLink={
                // eslint-disable-next-line no-nested-ternary
                themeMode === "light"
                  ? isMobile
                    ? "/images/Landing/About/m_cards.png"
                    : "/images/Landing/About/cards.png"
                  : isMobile
                  ? "/images/Landing/About/m_dark_cards.png"
                  : "/images/Landing/About/dark_cards.png"
              }
              containerClasses="xl:w-[661px] xl:h-[665px]
              lg:w-[528.8px] lg:h-[532px]
              md:w-[396.6px] md:h-[399px]
              xs:w-[344px] xs:h-[369.4px]
              samsungS8:w-[310px] samsungS8:h-[332.8px]
              w-[270px] h-[290px]"
            />
          </div>
        </div>
      </Content>
    </div>
  )
}

export default AboutModule
