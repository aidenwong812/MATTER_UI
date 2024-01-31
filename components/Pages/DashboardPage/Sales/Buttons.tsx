import ExportTransactionButton from "../ExportTransactionButton"
import NewListingButton from "../NewListingButton"
import PayoutFundsButtons from "../PayoutFundsButton"

const Buttons = () => (
  <div className="flex items-center gap-x-[15px]">
    <NewListingButton />
    <ExportTransactionButton />
    <PayoutFundsButtons />
  </div>
)

export default Buttons
