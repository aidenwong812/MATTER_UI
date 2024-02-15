import { createPublicClient, http } from "viem"
import { base, optimismGoerli } from "viem/chains"
import useConnectedWallet from "@/hooks/useConnectedWallet"
import { IS_TESTNET } from "@/lib/consts"
import { useEffect, useState } from "react"

const useBalance = () => {
  const [balance, setBalance] = useState(BigInt(0))
  const { connectedWallet } = useConnectedWallet()

  const client = createPublicClient({
    chain: IS_TESTNET ? optimismGoerli : base,
    transport: http(),
  })

  useEffect(() => {
    const init = async () => {
      const response = await client.getBalance({
        address: connectedWallet as any,
      })
      setBalance(response)
    }
    if (!client || !connectedWallet) return
    init()
  }, [client, connectedWallet])

  return { balance }
}

export default useBalance
