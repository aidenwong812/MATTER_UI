import useIsMobile from "../../../../hooks/useIsMobile"
import Media from "../../../../shared/Media"
import FadeInWhenVisible from "../../../FadeInWhenVisible"

const AboutModule = () => {
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
          link={isMobile ? "/images/Damian/bottom_dot.png" : "/images/Damian/d_bottom_dot.png"}
          blurLink={isMobile ? "/images/Damian/bottom_dot.png" : "/images/Damian/d_bottom_dot.png"}
          containerClasses="xl:w-[187px] xl:h-[69px]
          lg:w-[149.6px] lg:w-[55.2px]
          md:w-[112.2px] md:h-[41.4px]
          w-[70px] h-[109px]"
        />
      </div>
      <div
        className="md:w-[768px] lg:w-[1024px] xl:w-[1280px] w-full
              xl:py-[70px] lg:py-[56px] md:py-[42px]
              xl:px-[80px] lg:px-[64px] md:px-[48px]
              pt-[25px] px-[20px]
              pb-[205px] samsungS8:pb-[230px] xs:pb-[280px]
              mx-[15px] md:mx-0
              shadow-[0px_8px_8px_2px_#1e6cd826] dark:shadow-[0px_8px_8px_2px_#1B1B1C]
              xl:translate-y-[-185px] md:translate-y-[-148px] md:translate-y-[-111px]
              translate-y-[-50px]
              rounded-[10px] md:rounded-[20px]
              bg-white dark:bg-[#1A2629]
              relative"
      >
        <FadeInWhenVisible
          className="absolute right-0 
        xl:top-[-180px] lg:top-[-144px] md:top-[-108px]
        hidden md:block"
        >
          <Media
            type="image"
            link="/images/Damian/damian.svg"
            blurLink="/images/Damian/damian.png"
            containerClasses="xl:w-[384px] xl:h-[413px]
            lg:w-[307.2px] lg:h-[330.4px]
            md:w-[230.4px] md:h-[247.8px]
            rounded-[20px] overflow-hidden
            dark:shadow-[0px_4px_10px_4px_#1B1B1C]"
          />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <pre
            className="text-[16px] samsungS8:text-[18px] xs:text-[20px] 
            md:text-[14.4px] lg:text-[19.2px] xl:text-[24px]
            font-poppins_bold text-[#484848] dark:text-white
            leading-[120%]
            md:pb-[40px]"
          >
            ABOUT DAMIAN
          </pre>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <pre
            className="text-[20px] samsungS8:text-[22px] xs:text-[24px]
            md:text-[24px] lg:text-[32px] xl:text-[40px]
            font-poppins_bold text-[#484848] dark:text-white
            leading-[120%]
            py-[20px]"
          >
            {`The Financial Verse\nis home to DM Scalping`}
          </pre>
        </FadeInWhenVisible>
        <FadeInWhenVisible className="grid grid-cols-1 md:grid-cols-10">
          <pre
            className="text-[11px] samsungS8:text-[13px] xs:text-[15px]
            md:text-[10.8px] lg:text-[14.4px] xl:text-[18px]
            xl:pt-[45px] lg:pt-[36px] md:pt-[27px]
            font-poppins text-[#484848] dark:text-white
            md:col-span-4"
          >
            {isMobile
              ? `One of the most successful and\nprofessional traders in North America. With\nover 12 years of trading experience, DM\nScalping specializes in scalping indices,\ncommodities, and major currencies,\nemerging as one of the best scalpers in the\nregion. He has a proven track record of\nconsistently generating exceptional\nreturns for his clients.`
              : `One of the most successful and\nprofessional traders in North America.\nWith over 12 years of trading experience,\nDM Scalping specializes in scalping\nindices, commodities, and major\ncurrencies, emerging as one of the best\nscalpers in the region. He has a proven\ntrack record of consistently generating\nexceptional returns for his clients.`}
          </pre>
          <pre
            className="text-[11px] samsungS8:text-[13px] xs:text-[15px]
            md:text-[10.8px] lg:text-[14.4px] xl:text-[18px]
            xl:pt-[45px] lg:pt-[36px] md:pt-[27px] pt-[20px]
            font-poppins text-[#484848] dark:text-white
            md:col-span-4"
          >
            {isMobile
              ? `DM Scalping has successfully managed\n$250 million portfolios, generating an\nimpressive return of 120% per year\npassively. His proven track record speaks\nfor itself, and his clients continue to rely on\nhim today for all their trading needs.`
              : `DM Scalping has successfully managed\n$250 million portfolios, generating an\nimpressive return of 120% per year\npassively. His proven track record speaks\nfor itself, and his clients continue to rely on\nhim today for all their trading needs.`}
          </pre>
        </FadeInWhenVisible>
        <FadeInWhenVisible
          className="flex justify-center md:hidden
        absolute w-full
        left-0 
        bottom-[-45px] samsungS8:bottom-[-55px] xs:bottom-[-60px]"
        >
          <Media
            type="image"
            link="/images/Damian/m_damian.svg"
            blurLink="/images/Damian/m_damian.png"
            containerClasses="xs:w-[300px] xs:h-[322px]
            samsungS8:w-[250px] samsungS8:h-[268.33px]
            w-[220px] h-[236px]
            !rounded-[15px] overflow-hidden
            dark:shadow-[0px_4px_10px_4px_#1B1B1C]
            shadow-[0px_4px_10px_4px_#1e6cd826] "
          />
        </FadeInWhenVisible>
      </div>
    </div>
  )
}

export default AboutModule
