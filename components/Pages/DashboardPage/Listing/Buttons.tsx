import NewListingButton from "../NewListingButton"
import ShopifyButton from "../ShopifyButton"

const Buttons = () => (
  <div
    className="flex flex-col md:flex-row 
  items-start md:items-center gap-y-[10px] md:gap-x-[15px]"
  >
    <ShopifyButton />
    <NewListingButton />
  </div>
)

export default Buttons
