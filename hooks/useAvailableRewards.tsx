import { useEffect, useState } from "react"
import useSmartWallets from "./useSmartWallets"
import getAvailableRewards from "../lib/getAvailableRewards"

const useAvailableRewards = (tokenIds) => {
  const { smartWallets } = useSmartWallets(tokenIds)
  const [availableRewards, setAvailableRewards] = useState(null)

  useEffect(() => {
    const init = async () => {
      const response = await getAvailableRewards(smartWallets)
      const sum = response[0]
      setAvailableRewards(sum)
    }
    if (smartWallets.length === 0) return
    init()
  }, [smartWallets])

  return { availableRewards, smartWallets }
}

export default useAvailableRewards
