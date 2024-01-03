import { useRouter } from "next/router"
import Accordion from "../../../../shared/Accordion"
import Button from "../../../../shared/Button"
import Media from "../../../../shared/Media"
import FadeInWhenVisible from "../../../FadeInWhenVisible"
import questionList from "../questionList"

const FAQModule = () => {
  const router = useRouter()

  return (
    <FadeInWhenVisible>
      <div
        className="bg-[#54B3C3] 
          md:min-h-screen w-screen
          flex flex-col items-center"
      >
        <p
          className="font-poppins_bold 
          text-[20px] md:text-[40px] text-white 
          md:pt-[120px] md:pb-[50px]
          pt-[35px] pb-[35px]"
          data-aos="fade-up"
        >
          Frequently Asked Question
        </p>
        <div
          className="flex flex-col gap-y-[20px] 
        w-[90%] md:w-[80%] pb-[50px]"
        >
          {questionList.map((question, i) => (
            <Accordion
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              questionNumber={i + 1}
              question={question.question}
              className="border-[1px] border-[white]
                                overflow-hidden
                                rounded-[6.5px] md:rounded-[20px]"
              content={question.content}
              questionClassName="font-poppins_medium 
                                bg-[#44A0AF] 
                                border-b-[2px] border-b-[white]
                                py-[10px] px-[20px] md:p-[32px]
                                text-[16px] md:text-[14.4px] lg:text-[19.2px] xl:text-[24px] 
                                text-left md:text-start
                                text-white"
              contentClassname="font-poppins text-white
                                py-[15px] px-[15px] md:p-[32px]
                                text-[12px] md:text-[10.8px] lg:text-[14.4px] xl:text-[18px] text-white"
              expandIcon={
                <Media
                  type="image"
                  link="/images/Landing/FAQ/chevron-down.png"
                  containerClasses="w-[15px] h-[15px] md:w-[19.2px] lg:w-[25.6px] xl:w-[32px] 
                      lg:h-[25.6px] xl:h-[32px] md:h-[19.2px]"
                />
              }
              hideIcon={
                <Media
                  type="image"
                  link="/images/Landing/FAQ/chevron-up.png"
                  containerClasses="w-[15px] h-[15px] md:w-[19.2px] lg:w-[25.6px] xl:w-[32px] 
                      lg:h-[25.6px] xl:h-[32px] md:h-[19.2px]"
                />
              }
            />
          ))}
        </div>
        <Button
          id="faq_see_more"
          className="w-[164px] h-[47px]
          text-white border-[2px] border-white
          rounded-full
          mb-[50px]
          font-poppins_semibold text-[18px]"
          onClick={() => router.push("/invest")}
        >
          Invest Now
        </Button>
      </div>
    </FadeInWhenVisible>
  )
}

export default FAQModule
