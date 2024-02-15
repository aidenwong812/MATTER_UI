import { useDashboard } from "@/providers/DashboardProvider"
import TableRow from "../TableRow"

const TableBody = () => {
  const { listingProducts } = useDashboard()

  return (
    <tbody>
      {listingProducts.map((listing) => (
        <TableRow key={listing.id} data={listing} />
      ))}
    </tbody>
  )
}

export default TableBody
