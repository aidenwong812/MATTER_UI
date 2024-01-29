import Link from "next/link"
import Buttons from "../Header/Buttons"

const DesktopMenu = () => (
  <div
    className="flex gap-x-[32px] items-center justify-end
          flex-grow text-gray_8 text-[16px] cursor-pointer"
  >
    <Link href="/services">
      <p>Services</p>
    </Link>
    <Link href="/products/digital">
      <p>Digital Items</p>
    </Link>
    <Link href="/products/physical">
      <p>Physical Products</p>
    </Link>
    <div className="flex gap-x-[10px]">
      <Buttons />
    </div>
  </div>
)

export default DesktopMenu
