import { useEffect, useState } from "react"
import getProductsByType from "../lib/firebase/getProductsByType"

const usePhysicalData = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const init = async () => {
      const response = await getProductsByType("Physical")

      setProducts(response)
    }

    init()
  }, [])

  return {
    products,
  }
}

export default usePhysicalData
