import Link from "next/link"
import SocialButtons from "./SocialButtons"

const MobileFooter = () => (
  <div
    className="w-full flex flex-col
  items-center
  bg-[#d9d9d933]
  py-[30px]
  border-t-white border-t-[1px]"
  >
    <p
      className="font-poppins_bold text-[16px] uppercase
    text-white"
    >
      <span className="text-[#73B3C2]">Financial</span>Verse
    </p>
    <div
      className="flex gap-x-[10px] w-full
                    justify-center
                    py-[10px]
                    text-[white] text-[14px]
                    cursor-pointer"
    >
      <Link href="/contact">
        <p>Contact</p>
      </Link>
      <Link href="/invest">
        <p>Invest</p>
      </Link>
      <Link href="/terms">
        <p>Terms & Conditions</p>
      </Link>
    </div>
    <div className="flex gap-x-[20px]">
      <SocialButtons />
    </div>
  </div>
)

export default MobileFooter
