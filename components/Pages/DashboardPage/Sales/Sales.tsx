import TransactionTable from "../TransactionTable"
import ChartSection from "./ChartSection"
import TopSection from "./TopSection"

const Sales = () => (
  <div
    className="border-t border-t-gray_3 
    border-b border-b-gray_3 pb-[20px]"
  >
    <TopSection />
    <ChartSection />
    <TransactionTable />
  </div>
)

export default Sales
