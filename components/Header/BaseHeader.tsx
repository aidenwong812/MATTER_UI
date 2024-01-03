import DesktopMenu from "../DesktopMenu"
import MobileMenu from "../MobileMenu"
import useIsMobile from "../../hooks/useIsMobile"

const BaseHeader = () => {
  const isMobile = useIsMobile()

  return (
    <nav
      className="fixed top-0 z-50 w-screen
              flex justify-center
              bg-[white] dark:bg-[#10181A]"
      id="header_nav_bar"
    >
      {isMobile ? <MobileMenu /> : <DesktopMenu />}
    </nav>
  )
}

export default BaseHeader
