import useIsMobile from "../../../../hooks/useIsMobile"
import FadeInWhenVisible from "../../../FadeInWhenVisible"

const WhyVerseDetail = () => {
  const isMobile = useIsMobile()

  return (
    <div
      className="md:w-[768px] lg:w-[1024px] xl:w-[1280px]
                xl:p-[80px] lg:p-[64px] md:p-[48px]
                py-[25px] px-[20px]
                mx-[20px] md:mx-0
                shadow-[0px_8px_8px_2px_#1e6cd826] dark:shadow-[0px_8px_8px_2px_#1B1B1C]
                xl:translate-y-[-120px] md:translate-y-[-96px] md:translate-y-[-72px]
                translate-y-[-50px]
                rounded-[10px] md:rounded-[20px]
                bg-white dark:bg-[#1A2629] relative"
    >
      <FadeInWhenVisible>
        <pre
          className="text-[16px] samsungS8:text-[18px] xs:text-[20px]
          md:text-[14.4px] lg:text-[19.2px] xl:text-[24px]
          font-poppins_bold text-[#484848] dark:text-white
          leading-[120%] 
          pb-[20px] md:pb-[40px]"
        >
          WHY FINANCIAL VERSE
        </pre>
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <pre
          className="text-[20px] samsungS8:text-[22px] xs:text-[24px] 
          md:text-[24px] lg:text-[32px] xl:text-[40px]
          font-poppins_bold text-[#484848] dark:text-white
          leading-[120%]"
        >
          {`Nulla ipsum nulla,\ncursus suscipit congue`}
        </pre>
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <pre
          className="text-[11px] samsungS8:text-[13px] xs:text-[16px]
          md:text-[10.8px] lg:text-[14.4px] xl:text-[18px]
          xl:pt-[45px] lg:pt-[36px] md:pt-[27px] pt-[20px]
          font-poppins text-[#484848] dark:text-white"
        >
          {isMobile
            ? `Lorem ipsum dolor sit amet, consectetur\nadipiscing elit. Nulla ipsum nulla, cursus\nsuscipit congue eget, congue vitae ligula.\nInteger dignissim, urna ut elementum\ntempor, nibh eros commodo enim, non\nvenenatis leo turpis id lacus. In sed elit\nconsectetur, gravida nulla et, volutpat\narcu. Morbi condimentum dignissim libero\ncursus. `
            : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ipsum nulla, cursus suscipit congue eget, congue\nvitae ligula. Integer dignissim, urna ut elementum tempor, nibh eros commodo enim, non venenatis leo turpis\nid lacus. In sed elit consectetur, gravida nulla et, volutpat arcu. Morbi condimentum dignissim libero cursus.`}
        </pre>
      </FadeInWhenVisible>
    </div>
  )
}

export default WhyVerseDetail
