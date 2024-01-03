import useIsMobile from "../../../../hooks/useIsMobile"
import Media from "../../../../shared/Media"
import Content from "../../../Layout/Content"
import BenefitCard from "../../BenefitCard"
import benefitCards from "../../benefit.json"

const BenefitModule = () => {
  const isMobile = useIsMobile()

  return (
    <div
      className="flex justify-center items-center
          w-screen 
          md:h-[calc(100vh-98px)]
          py-[35px] md:py-0
          relative"
    >
      <div className="hidden md:block absolute left-[4px] top-[10px]">
        <Media
          type="image"
          link="/images/Landing/Special/d_top_bg.png"
          blurLink="/images/Landing/Special/d_top_bg.png"
          containerClasses="w-[170px] h-[266px]"
        />
      </div>
      <div className="absolute right-[4px] bottom-0 hidden md:block">
        <Media
          type="image"
          link="/images/Landing/Special/d_bottom_bg.png"
          blurLink="/images/Landing/Special/d_bottom_bg.png"
          containerClasses="w-[170px] h-[266px]"
        />
      </div>
      <Content className="relative z-[10]">
        <div
          className="grid 
        grid-cols-1 md:grid-cols-3 
        gap-y-[20px] md:gap-y-[40px]"
          data-aos="fade-up"
        >
          {benefitCards.map((card, i) => (
            <BenefitCard
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              title={card.title}
              darkBlurLink={card.darkBlurLink}
              darkLink={card.darkLink}
              link={card.link}
              blurLink={card.blurLink}
              content={isMobile ? card.mobile_content : card.content}
            />
          ))}
        </div>
      </Content>
    </div>
  )
}

export default BenefitModule
