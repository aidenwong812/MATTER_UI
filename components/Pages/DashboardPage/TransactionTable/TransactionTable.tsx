import TableBody from "./TableBody"
import TableFooter from "./TableFooter"
import TableHead from "./TableHead"

const TransactionTable = () => (
  <table className="w-full border-t border-t-gray_1">
    <TableHead />
    <TableBody />
    <TableFooter />
  </table>
)

export default TransactionTable
