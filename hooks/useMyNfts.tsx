import { useEffect, useMemo, useState } from "react"
import getNFTs from "../lib/alchemy/getNFTs"
import useConnectedWallet from "./useConnectedWallet"

const useMyNfts = () => {
  const { connectedWallet } = useConnectedWallet()
  const [ownedNfts, setOwnedNfts] = useState([])
  const tokenIds = useMemo(() => ownedNfts.map((nft) => parseInt(nft.id.tokenId, 16)), [ownedNfts])

  useEffect(() => {
    const init = async () => {
      const response = await getNFTs(connectedWallet, process.env.NEXT_PUBLIC_DROP_CONTRACT)
      setOwnedNfts(response.ownedNfts)
    }
    if (!connectedWallet) return
    init()
  }, [connectedWallet])

  return {
    ownedNfts,
    tokenIds,
  }
}

export default useMyNfts
