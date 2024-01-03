import useIsMobile from "../../hooks/useIsMobile"
import Media from "../../shared/Media"
import Layout from "../Layout"
import Content from "./Content"

const TermsPage = () => {
  const isMobile = useIsMobile()

  return (
    <Layout type="full">
      <div
        className="grid grid-cols-2 
            gap-x-[15px] md:gap-x-0
            mt-[62px] md:mt-[85px] lg:mt-[97px]
            px-[30px] md:w-[768px] lg:w-[1024px] xl:w-[1280px]"
      >
        <div
          className="absolute w-screen
                h-[125px] md:h-[330px] lg:h-[420px] xl:h-[510px]
                bg-gradient-to-b
                left-0 z-[1]
                from-[#34b5d1] to-[#2a82af]"
          data-aos="fade-up"
        />
        <div
          className="text-white w-full
                relative z-[2]
                flex flex-col justify-center items-center"
          data-aos="fade-up"
        >
          <p
            className="md:text-[30px] lg:text-[40px] xl:text-[50px]
                    text-[12px] samsungS8:text-[14px] font-poppins_bold"
          >
            FINANCIAL VERSE
          </p>
          <p
            className="md:text-[19.2px] lg:text-[25.6px] xl:text-[32px]
                    text-[12px] samsungS8:text-[14px] font-poppins_bold"
          >
            Terms & Conditions
          </p>
          <p
            className="md:text-[13.2px] lg:text-[17.6px] xl:text-[22px]
                    text-[10px] font-poppins"
          >
            We value your privacy
          </p>
        </div>
        <div className="py-[20px] z-[2]" data-aos="fade-up">
          <Media
            type="image"
            containerClasses="xl:w-[469.8px] xl:h-[470.92px]
                        lg:w-[375.84px] lg:h-[376.73px]
                        md:w-[281.88px] md:h-[282.5px]
                        w-[131px] h-[106px]"
            link={isMobile ? "/images/Terms/mobile_terms.svg" : "/images/Terms/terms.svg"}
            blurLink={isMobile ? "/images/Terms/mobile_terms.png" : "/images/Terms/terms.png"}
          />
        </div>
      </div>
      <Content />
    </Layout>
  )
}

export default TermsPage
