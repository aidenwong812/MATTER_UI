import { useEffect, useState } from "react"
import getProductsByType from "../lib/firebase/getProductsByType"

const useMatterMarketData = (type) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const init = async () => {
      const response = await getProductsByType(type)

      setProducts(response)
    }

    init()
  }, [type])

  return {
    products,
  }
}

export default useMatterMarketData
