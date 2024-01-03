import { useState, useEffect } from "react"
import getEthPrice from "../lib/getEthPrice"

const useEthPrice = () => {
  const [ethPrice, setEthPrice] = useState(0)

  useEffect(() => {
    const init = async () => {
      const price = await getEthPrice()

      setEthPrice(price)
    }

    init()
  }, [])

  const getEthConversion = (usdAmount) => parseFloat(usdAmount) / ethPrice
  const getUsdConversion = (ethAmount) => (parseFloat(ethAmount) * ethPrice).toFixed(2)

  return {
    ethPrice,
    getEthConversion,
    getUsdConversion,
  }
}

export default useEthPrice
