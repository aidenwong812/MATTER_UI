import SocialButtons from "./SocialButtons"
import InfoLinks from "./InfoLinks"
import JoinForKit from "./JoinForKit"
import MFooterLogo from "./MFooterLogo"
import PagesLinks from "./PagesLinks"

const MFooterModule = () => (
  <div
    className="bg-[#10181A] dark:bg-black
        w-full
        px-[25px] py-[30px]"
  >
    <MFooterLogo />
    <JoinForKit />
    <div className="grid grid-cols-2">
      <PagesLinks />
      <InfoLinks />
    </div>
    <SocialButtons />
    <p
      className="font-poppins
                border-t-[2px] border-t-[white]
                text-[14px]
                text-[#ffffffcc] text-center
                py-[20px]"
    >
      Copyright @FinancialVerse. All Rights Reserved.
    </p>
  </div>
)

export default MFooterModule
