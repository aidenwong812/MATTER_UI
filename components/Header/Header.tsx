import Icon from "../../shared/Icon"
import Image from "../../shared/Image"
import DesktopMenu from "../DesktopMenu/DesktopMenu"

const Header = () => (
  <nav
    className="w-full h-[56px] fixed top-0 left-0
        flex items-center justify-between
        px-[40px] border-b border-b-gray_3"
  >
    <div className="flex gap-x-[40px]">
      <Image
        link="/images/logo.svg"
        blurLink="/images/logo.png"
        containerClasses="w-[82px] aspect-[82/14]"
        alt="not found logo"
      />
      <div className="flex items-center gap-x-[5px]">
        <Icon name="search" className="text-gray_8" size={24} />
        <input type="text" placeholder="Find Stuff..." className="border-none focus:ring-0 px-1" />
      </div>
    </div>
    <DesktopMenu />
  </nav>
)

export default Header
