import Media from "../../../../shared/Media"
import FadeInWhenVisible from "../../../FadeInWhenVisible"
import Content from "../../../Layout/Content"
import TurnCard from "./TurnCard"
import trunCards from "../turnsCard"
import useIsMobile from "../../../../hooks/useIsMobile"

const TurnsModule = () => {
  const isMobile = useIsMobile()

  return (
    <div
      className="w-screen relative
          flex items-center justify-center
          flex-col"
    >
      <div
        className="absolute
      md:left-0 md:bottom-[2px]
      right-0 bottom-[30px]"
      >
        <Media
          type="image"
          link={isMobile ? "/images/HowFund/bottom_dot.png" : "/images/WhyVerse/d_bottom_dot.png"}
          blurLink={
            isMobile ? "/images/HowFund/bottom_dot.png" : "/images/WhyVerse/d_bottom_dot.png"
          }
          containerClasses="xl:w-[187px] xl:h-[69px]
          lg:w-[149.6px] lg:w-[55.2px]
          md:w-[112.2px] md:h-[41.4px]
          w-[70px] h-[109px]"
        />
      </div>
      <div
        className="md:w-[768px] lg:w-[1024px] xl:w-[1280px]
                  xl:translate-y-[-120px] md:translate-y-[-96px] md:translate-y-[-72px]
                  translate-y-[-50px]
                  relative"
      >
        <FadeInWhenVisible checkInview={false}>
          <Content className="relative z-[10]">
            <div
              className="grid grid-cols-1 md:grid-cols-3 
            gap-y-[20px] md:gap-y-[40px]"
            >
              {trunCards.map((card, i) => (
                <TurnCard
                  // eslint-disable-next-line react/no-array-index-key
                  key={i}
                  title={card.title}
                  link={card.link}
                  blurLink={card.blurLink}
                  content={isMobile ? card.mobile_content : card.content}
                />
              ))}
            </div>
          </Content>
        </FadeInWhenVisible>
      </div>
    </div>
  )
}

export default TurnsModule
