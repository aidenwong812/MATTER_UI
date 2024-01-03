import Media from "../../../../shared/Media"

const TurnCard = ({ link, blurLink, title, content }) => (
  <div className="flex justify-center">
    <div
      className="flex flex-col items-start
            xl:w-[384px] 
            lg:w-[307.2px] 
            md:w-[230.4px] 
            w-full
            mx-[20px] md:mx-0
            md:py-[9px] lg:py-[12px] xl:py-[15px]
            md:px-[12px] lg:px-[16px] xl:px-[20px]
            p-[20px]
            rounded-[10px] md:rounded-[10px]
            bg-white dark:bg-[#1A2629]
            shadow-[2px_10px_20px_4px_#54b3c34f] dark:shadow-[2px_10px_20px_4px_#1B1B1C]"
    >
      <div
        className="flex md:flex-col flex-row 
      md:items-start items-center
      gap-x-[10px]"
      >
        <div
          className="xl:w-[56px] xl:h-[56px]
                  lg:w-[44.8px] lg:h-[44.8px]
                  md:w-[33.6px] md:h-[33.6px]
                  w-[47px] h-[47px]
                  bg-[#54B3C3] rounded-[4px]
                  flex items-center justify-center"
        >
          <Media
            type="image"
            link={link}
            blurLink={blurLink}
            containerClasses="xl:w-[37px] xl:h-[37px]
            lg:w-[29.6px] lg:h-[29.6px]
            md:w-[22.2px] md:h-[22.2px]
            w-[30.76px] h-[30.76px]"
          />
        </div>
        <p
          className="text-[#484848] dark:text-white
          pl-[10px]
          text-[14px] samsungS8:text-[16px] xs:text-[18px]
          md:text-[14.4px] lg:text-[19.2px] xl:text-[24px]
          font-poppins_medium pt-[5px] lg:pt-[15px]"
        >
          {title}
        </p>
      </div>
      <pre
        className="text-[#484848] dark:text-white
        text-[12px] samsungS8:text-[14px] xs:text-[16px]
        md:text-[10.8px] lg:text-[14.4px] xl:text-[18px]
        font-poppins pt-[5px] lg:pt-[10px]
        pt-[15px]"
      >
        {content}
      </pre>
    </div>
  </div>
)

export default TurnCard
