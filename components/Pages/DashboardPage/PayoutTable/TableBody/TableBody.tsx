import TableRow from "../TableRow"
import { useWallets } from "@privy-io/react-auth"

const TableBody = (): JSX.Element => {

  const { wallets } = useWallets();
  // const { approveWithPrivy, balance, minterAllowance } = useUsdc()
  return (
    <tbody>
      {wallets.map((wallet, index) => (
        <TableRow key={index} wallet={wallet} />
      ))}
    </tbody>
  );
};

export default TableBody
