import { useEffect, useState } from "react"
import getProductsByType from "../lib/firebase/getProductsByType"

const useDigitalData = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const init = async () => {
      const response = await getProductsByType("Digital")

      setProducts(response)
    }

    init()
  }, [])

  return {
    products,
  }
}

export default useDigitalData
