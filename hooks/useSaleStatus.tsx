import { Contract } from "ethers"
import { useCallback, useEffect, useMemo, useState } from "react"
import abi from "../lib/abi/drop.json"
import getDefaultProvider from "../lib/getDefaultProvider"
import { CHAIN_ID, DROP_ADDRESS } from "../lib/consts"

const useSaleStatus = () => {
  const [publicSalePrice, setPublicSalePrice] = useState("0")
  const drop = useMemo(() => new Contract(DROP_ADDRESS, abi, getDefaultProvider(CHAIN_ID)), [])

  const initializeStatus = useCallback(async () => {
    const details = await drop.saleDetails()
    setPublicSalePrice(details.publicSalePrice.toString())
  }, [drop])

  useEffect(() => {
    initializeStatus()
  }, [drop, initializeStatus])

  return {
    publicSalePrice,
  }
}

export default useSaleStatus
