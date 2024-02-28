import useConnectedWallet from "@/hooks/useConnectedWallet"
import useTransferHistory from "@/hooks/useTransferHistory"
import TableRow from "../TableRow"

const TableBody = () => {
  const { connectedWallet } = useConnectedWallet()
  const { payoutActivity } = useTransferHistory(connectedWallet)

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
