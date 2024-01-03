import Link from "next/link"
import Media from "../../shared/Media"
import MenuList from "./MenuList"

const MobileMenu = () => (
  <div
    className="w-full flex justify-between items-center
        py-[15px] px-[20px] cursor-pointer"
  >
    <Link href="/">
      <div>
        <Media
          type="image"
          link="/images/Header/Mobile/logo.png"
          blurLink="/images/Header/Mobile/logo.png"
          containerClasses="w-[185px] h-[34px]"
        />
      </div>
    </Link>
    <MenuList />
  </div>
)

export default MobileMenu
