import MobileMenu from "../MobileMenu"
import useIsMobile from "../../hooks/useIsMobile"
import DesktopAuthMenu from "../DesktopAuthMenu"

const AuthenticatedHeader = () => {
  const isMobile = useIsMobile()

  return (
    <nav
      className="w-full 
    px-[60px] lg:px-[48px] md:px-[38.4px]
    py-[50px] lg:py-[40px] md:py-[30px]"
      id="header_nav_bar"
    >
      {isMobile ? <MobileMenu /> : <DesktopAuthMenu />}
    </nav>
  )
}

export default AuthenticatedHeader
