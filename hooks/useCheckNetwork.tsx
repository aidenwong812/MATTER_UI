import { toast } from "react-toastify"
import { useNetwork, useSwitchNetwork } from "wagmi"
import { mainnet, polygon, goerli, polygonMumbai } from "@wagmi/core/chains"
import { useCallback } from "react"
import { CHAIN_ID } from "../lib/consts"

function useCheckNetwork() {
  const { chain: activeChain } = useNetwork()
  const { switchNetwork } = useSwitchNetwork()

  const checkNetwork = useCallback(() => {
    if (activeChain?.id !== CHAIN_ID) {
      switchNetwork(CHAIN_ID)
      const allChains = [mainnet, goerli, polygon, polygonMumbai]
      const myChain = allChains.find((blockchain) => blockchain.id === CHAIN_ID)
      toast.error(`Please connect to ${myChain.name} and try again`)

      return false
    }

    return true
  }, [switchNetwork, activeChain])

  return {
    checkNetwork,
  }
}

export default useCheckNetwork
