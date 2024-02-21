import { useWallets } from "@privy-io/react-auth"
import TableRow from "../TableRow"

const TableBody = (): JSX.Element => {
  const { wallets } = useWallets();
  return (
    <tbody>
      {wallets.map((wallet, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <TableRow key={index} wallet={wallet} />
      ))}
    </tbody>
  );
};
export default TableBody
