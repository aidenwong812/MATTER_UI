import { useTheme } from "../../../providers/ThemeProvider"
import Media from "../../../shared/Media"

const BenefitCard = ({ link, blurLink, title, content, darkLink, darkBlurLink }) => {
  const { themeMode } = useTheme()

  return (
    <div className="flex justify-center">
      <div
        className="flex flex-col items-start
              xl:w-[384px] xl:h-[230px]
              lg:w-[307.2px] lg:h-[184px]
              md:w-[230.4px] md:h-[138px]
              w-[285px] samsungS8:w-[321px] xs:w-[350px] xs:h-auto
              md:py-[9px] lg:py-[12px] xl:py-[15px]
              md:px-[12px] lg:px-[16px] xl:px-[20px]
              p-[15px]
              bg-white dark:bg-[#1A2629]
              shadow-[0px_10px_20px_2px_#54b3c34f] dark:shadow-[0px_10px_20px_2px_#1B1B1C]
              rounded-[10px] md:rounded-md"
      >
        <div
          className="flex md:flex-col 
        flex-row items-center md:items-start
        pb-[5px] md:pb-0
        gap-x-[15px]"
        >
          <div
            className="xl:w-[37px] xl:h-[37px]
                    lg:w-[29.6px] lg:h-[29.6px]
                    md:w-[22.2px] md:h-[22.2px]
                    w-[36px] h-[36px]
                    bg-[#D9D9D9] dark:bg-[#545C5F]
                    rounded-[4px]
                    flex items-center justify-center"
          >
            <Media
              type="image"
              link={themeMode === "dark" ? darkLink : link}
              blurLink={themeMode === "dark" ? darkBlurLink : blurLink}
              containerClasses="xl:w-[25px] xl:h-[25px]
              lg:w-[20px] lg:h-[20px]
              md:w-[15px] md:w-[15px]
              w-[24px] h-[24px]"
            />
          </div>
          <p
            className="text-[#484848] dark:text-white
              text-[18px] md:text-[19.2px] xl:text-[24px]
              font-poppins_medium 
              pt-0 md:pt-[5px]"
          >
            {title}
          </p>
        </div>
        <pre
          className="text-[#484848] dark:text-white
          text-[11.9px] samsungS8:text-[13.4px] xs:text-[14.6px]
          md:text-[10.8px] lg:text-[14.4px] xl:text-[18px]
          leading-[120%] md:leading-[150%]
          font-poppins pt-[10px]"
        >
          {content}
        </pre>
      </div>
    </div>
  )
}

export default BenefitCard
