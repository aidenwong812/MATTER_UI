import { useBalance as wagmiUB } from "wagmi"
import useConnectedWallet from "./useConnectedWallet"
import { CHAIN_ID } from "@/lib/consts"

const useBalance = () => {
  const { connectedWallet } = useConnectedWallet()

  const { data } = wagmiUB({
    address: connectedWallet as any,
    chainId: CHAIN_ID,
  })

  return { balance: data?.formatted }
}

export default useBalance
