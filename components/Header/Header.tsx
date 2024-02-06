import Link from "next/link"
import useIsMobile from "../../hooks/useIsMobile"
import Image from "../../shared/Image"
import DesktopMenu from "../DesktopMenu"
import MobileMenu from "../MobileMenu"
import LookupInput from "./LookupInput"

const Header = () => {
  const isMobile = useIsMobile()

  return (
    <nav
      className="w-full h-[56px] fixed top-0 left-0
          flex items-center justify-between z-[1000]
          px-[40px] border-b border-b-gray_3 bg-white"
    >
      <div className="flex gap-x-[40px]">
        <Link href="/">
          <div className="cursor-pointer flex items-center">
            <Image
              link="/images/matter_logo.svg"
              blurLink="/images/logo.png"
              containerClasses="w-[121px] aspect-[121/28]"
              alt="not found logo"
            />
          </div>
        </Link>
        <LookupInput />
      </div>
      {isMobile ? <MobileMenu /> : <DesktopMenu />}
    </nav>
  )
}

export default Header
