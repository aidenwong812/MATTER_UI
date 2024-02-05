import ExportTransactionButton from "../ExportTransactionButton"
import NewListingButton from "../NewListingButton"
import PayoutFundsButtons from "../PayoutFundsButton"

const Buttons = () => (
  <div
    className="flex flex-col md:flex-row 
  items-start md:items-center gap-y-[10px] md:gap-x-[15px] 
  px-[16px] md:px-0"
  >
    <NewListingButton />
    <ExportTransactionButton />
    <PayoutFundsButtons />
  </div>
)

export default Buttons
