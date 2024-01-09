import { useCallback, useEffect, useState } from "react"
import { getCreated1155DropsByAddress } from "../lib/zora/getCreated1155DropsByAddress"
import { CHAIN_ID } from "../lib/consts"

const use1155Drops = (creator: string) => {
  const [drops, setDrops] = useState([])

  const fetch1155Drops = useCallback(async () => {
    if (!creator) return
    const response = await getCreated1155DropsByAddress(creator, CHAIN_ID)

    setDrops(response)
  }, [creator])

  useEffect(() => {
    fetch1155Drops()
  }, [fetch1155Drops])

  return {
    drops,
    fetch1155Drops,
  }
}

export default use1155Drops
