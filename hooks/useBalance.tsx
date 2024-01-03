import { useBalance as wagmiUB } from "wagmi"
import useConnectedWallet from "./useConnectedWallet"
import { CHAIN_ID } from "../lib/consts"

const useBalance = (wallet = "") => {
  const { connectedWallet } = useConnectedWallet()

  const address = wallet || (connectedWallet as any)

  const { data } = wagmiUB({
    address,
    chainId: CHAIN_ID,
  })

  return { balance: data?.formatted }
}

export default useBalance
