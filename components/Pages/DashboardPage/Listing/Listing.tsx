import NewListingButton from "../NewListingButton"
import Listings from "./Listings"

const Listing = () => (
  <div
    className="border-t border-gray_3 px-[18px] md:px-0
  md:px-[24px] lg:px-[32px] xl:px-[40px]"
  >
    <div className="flex flex-col md:flex-row md:justify-between gap-y-[20px] mt-[20px]">
      <p className="text-black md:text-gray_8 text-[16px] md:text-[28px] leading-[120%] tracking-[-0.168px] mt-[12px]">
        Your Listings
      </p>
      <div
        className="flex flex-col md:flex-row 
      items-start md:items-center gap-y-[10px] md:gap-x-[15px]"
      >
        <NewListingButton />
      </div>
    </div>
    <Listings />
  </div>
)

export default Listing
