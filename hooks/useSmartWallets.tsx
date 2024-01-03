import { useEffect, useState } from "react"
import useTotalSupply from "./useTotalSupply"
import getSmartWallets from "../lib/getSmartWallets"

const useSmartWallets = (tokenIds = []) => {
  const [smartWallets, setSmartWallets] = useState([])
  const { totalSupply } = useTotalSupply()

  useEffect(() => {
    const init = async () => {
      const tokenIdArray =
        tokenIds.length > 0 ? tokenIds : Array.from({ length: totalSupply }, (_, i) => i + 1)
      const response = await getSmartWallets(tokenIdArray)
      setSmartWallets(response)
    }

    if (!totalSupply) return
    init()
  }, [totalSupply, tokenIds])

  return {
    smartWallets,
  }
}

export default useSmartWallets
