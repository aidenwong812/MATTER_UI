import InfoLinks from "./InfoLinks"
import JoinForKit from "./JoinForKit"
import PagesLinks from "./PagesLinks"
import SocialButtons from "./SocialButtons"

const DFooterModule = () => (
  <div
    className="w-full
          bg-[#10181A] dark:bg-[#000000]
          flex justify-center py-[100px]"
  >
    <div className="md:w-[768px] lg:w-[1024px] xl:w-[1280px]">
      <div
        className="grid grid-cols-9 border-b-[2px] border-b-white
        pb-[50px]"
      >
        <SocialButtons />
        <PagesLinks />
        <InfoLinks />
        <JoinForKit />
      </div>
      <p
        className="font-poppins
        xl:text-[16px] lg:text-[12.8px] md:text-[9.6px]
        text-[#ffffffcc] text-center
        pt-[50px]"
      >
        Copyright @FinancialVerse. All Rights Reserved.
      </p>
    </div>
  </div>
)

export default DFooterModule
