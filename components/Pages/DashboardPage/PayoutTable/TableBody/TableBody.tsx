import { useWallets } from "@privy-io/react-auth"
import usePayoutActivity from "@/hooks/usePayoutActivity"
import TableRow from "../TableRow"

const TableBody = () => {
  const { wallets } = useWallets()
  wallets.filter((wallet) => wallet.walletClientType === "privy")
  const { payoutActivity } = usePayoutActivity(wallets)

  return (
    <tbody>
      {
        payoutActivity.map((_, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <TableRow key={i} transaction={_} />
        ))
      }
    </tbody>
  )
}

export default TableBody
