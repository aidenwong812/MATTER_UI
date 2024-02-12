import { useDashboard } from "@/providers/DashboardProvider"
import TableRow from "../TableRow"

const TableBody = () => {
  const { orders } = useDashboard()

  return (
    <tbody>
      {orders.map((order) => (
        // eslint-disable-next-line react/no-array-index-key
        <TableRow key={order.id} data={order} />
      ))}
    </tbody>
  )
}

export default TableBody
