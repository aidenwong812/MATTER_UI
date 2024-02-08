import { useEffect, useState } from "react"
import getProductsByType from "../lib/firebase/getProductsByType"

const useServicesData = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const init = async () => {
      const response = await getProductsByType("Service")

      setProducts(response)
    }

    init()
  }, [])

  return {
    products,
  }
}

export default useServicesData
