import useIsMobile from "../../../../hooks/useIsMobile"
import Media from "../../../../shared/Media"
import FadeInWhenVisible from "../../../FadeInWhenVisible"
import SingleContact from "../SingleContact"
import ContactForm from "./ContactForm"

const FormModule = () => {
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
          link={
            isMobile ? "/images/ContactUs/bottom_dot.png" : "/images/ContactUs/d_bottom_dot.png"
          }
          blurLink={
            isMobile ? "/images/ContactUs/bottom_dot.png" : "/images/ContactUs/d_bottom_dot.png"
          }
          containerClasses="xl:w-[187px] xl:h-[69px]
          lg:w-[149.6px] lg:w-[55.2px]
          md:w-[112.2px] md:h-[41.4px]
          w-[70px] h-[109px]"
        />
      </div>
      <div
        className="md:w-[720px] lg:w-[960px] xl:w-[1200px] w-full
        xl:py-[60px] lg:py-[48px] md:py-[36px]
        xl:px-[40px] lg:px-[32px] md:px-[24px]
        py-[25px] px-[20px]
        mx-[20px] md:mx-0
        shadow-[0px_8px_8px_2px_#1e6cd826] dark:shadow-[0px_8px_8px_2px_#1B1B1C]
        xl:translate-y-[-185px] md:translate-y-[-148px] md:translate-y-[-111px]
        translate-y-[-50px]
        rounded-[10px] md:rounded-[20px]
        bg-white dark:bg-[#1A2629]"
      >
        <FadeInWhenVisible
          className="flex flex-col md:flex-row
        gap-y-[10px] md:gap-y-0"
        >
          <div
            className="flex items-center justify-center
            w-full md:w-[743px]"
          >
            <ContactForm />
          </div>
          <div className="flex justify-center py-[15px] md:py-0 md:px-[50px]">
            <div className="w-full h-[2px] md:w-[2px] md:h-full bg-[#D9D9D9]" />
          </div>
          <div
            className="flex flex-col md:col-span-4 gap-y-[20px]
          w-fit self-center md:self-start"
          >
            <SingleContact
              link="/images/ContactUs/mail.svg"
              blurLink="/images/ContactUs/mail.png"
              label="Email Address"
              data="dummymail@mail.com"
            />
            <SingleContact
              link="/images/ContactUs/phone.svg"
              blurLink="/images/ContactUs/phone.png"
              label="Phone Number 1"
              data="+123 456 78910"
            />
            <SingleContact
              link="/images/ContactUs/phone.svg"
              blurLink="/images/ContactUs/phone.png"
              label="Phone Number 1"
              data="+123 456 78910"
            />
          </div>
        </FadeInWhenVisible>
      </div>
    </div>
  )
}

export default FormModule
