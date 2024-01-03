import { useWallets } from "@privy-io/react-auth"

const useConnectedWallet = () => {
  const { wallets } = useWallets()
  const privyWallet = wallets?.find((wallet) => wallet.walletClientType === "privy")
  const connectedWallet = privyWallet?.address

  return { connectedWallet, privyWallet }
}

export default useConnectedWallet
