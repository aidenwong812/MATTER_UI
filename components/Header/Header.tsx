import useIsMobile from "../../hooks/useIsMobile"
import Icon from "../../shared/Icon"
import Image from "../../shared/Image"
import DesktopMenu from "../DesktopMenu"
import MobileMenu from "../MobileMenu"

const Header = () => {
  const isMobile = useIsMobile()

  return (
    <nav
      className="w-full h-[56px] fixed top-0 left-0
          flex items-center justify-between z-[1000]
          px-[40px] border-b border-b-gray_3 bg-white"
    >
      <div className="flex gap-x-[40px]">
        <Image
          link="/images/matter_logo.svg"
          blurLink="/images/logo.png"
          containerClasses="w-[121px] aspect-[121/28]"
          alt="not found logo"
        />
        {!isMobile && (
          <div className="flex items-center gap-x-[5px]">
            <Icon name="search" className="text-gray_8" size={24} />
            <input
              type="text"
              placeholder="Find Stuff..."
              className="border-none focus:ring-0 px-1"
            />
          </div>
        )}
      </div>
      {isMobile ? <MobileMenu /> : <DesktopMenu />}
    </nav>
  )
}

export default Header
