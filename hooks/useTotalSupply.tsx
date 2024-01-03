import { Contract } from "ethers"
import { useEffect, useMemo, useState } from "react"
import { CHAIN_ID, DROP_ADDRESS } from "../lib/consts"
import abi from "../lib/abi/drop.json"
import getDefaultProvider from "../lib/getDefaultProvider"

const useTotalSupply = () => {
  const [totalSupply, setTotalSupply] = useState(null)
  const contract = useMemo(() => new Contract(DROP_ADDRESS, abi, getDefaultProvider(CHAIN_ID)), [])

  useEffect(() => {
    const getTotalSupply = async () => {
      const response = await contract.totalSupply()
      setTotalSupply(response.toNumber())
    }

    getTotalSupply()
  }, [contract])

  return {
    totalSupply,
  }
}

export default useTotalSupply
