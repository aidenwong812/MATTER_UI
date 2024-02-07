import { useEffect, useState } from "react"
import getTrendingProducts from "../lib/firebase/getTrendingProducts"

const useTrendingProducts = () => {
  const [trendingProducts, setTrendingProducts] = useState([])

  useEffect(() => {
    const init = async () => {
      const response = await getTrendingProducts()

      setTrendingProducts(response)
    }

    init()
  }, [])

  return {
    trendingProducts,
  }
}

export default useTrendingProducts
