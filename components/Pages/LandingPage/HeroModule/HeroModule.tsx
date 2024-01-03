import useIsMobile from "../../../../hooks/useIsMobile"
import DesktopHero from "./DesktopHero"
import MobileHero from "./MobileHero"

const HeroModule = () => {
  const isMobile = useIsMobile()

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{isMobile ? <MobileHero /> : <DesktopHero />}</>
}

export default HeroModule
