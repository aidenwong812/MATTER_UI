import { useEffect, useState } from "react"
import getNewestProducts from "../lib/firebase/getNewestProducts"

const useNewestProducts = () => {
  const [newestProducts, setNewestProducts] = useState([])

  useEffect(() => {
    const init = async () => {
      const response = await getNewestProducts()

      setNewestProducts(response)
    }

    init()
  }, [])

  return {
    newestProducts,
  }
}

export default useNewestProducts
