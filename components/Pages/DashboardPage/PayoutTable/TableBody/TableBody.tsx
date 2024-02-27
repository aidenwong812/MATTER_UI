import useConnectedWallet from "@/hooks/useConnectedWallet"
import usePayoutActivity from "@/hooks/usePayoutActivity"
import TableRow from "../TableRow"

const TableBody = () => {
  const { connectedWallet } = useConnectedWallet()
  const { payoutActivity } = usePayoutActivity(connectedWallet)

  return (
    <tbody>
      {payoutActivity.map((_, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <TableRow key={i} transaction={_} />
      ))}
    </tbody>
  )
}

export default TableBody
