import { useEffect, useState } from "react"
import getProducts from "../lib/firebase/getProducts"
import getCustomers from "../lib/firebase/getCustomers"

const useLookup = () => {
  const [searchKey, setSearchKey] = useState("")
  const [isVisible, setIsVisible] = useState(false)

  const [products, setProducts] = useState([])
  const [customers, setCustomers] = useState([])
  const [filters, setFilters] = useState([])

  useEffect(() => {
    const init = async () => {
      const productDocs = await getProducts()
      const customerDocs = await getCustomers()

      setProducts(productDocs)
      setCustomers(customerDocs)
    }

    init()
  }, [])

  useEffect(() => {
    const data = [...products, ...customers].filter(
      (item) =>
        item?.title?.toLowerCase().search(searchKey.toLowerCase()) >= 0 ||
        item?.businessName?.toLowerCase().search(searchKey.toLowerCase()) >= 0,
    )

    setFilters(data)
  }, [products, customers, searchKey])

  return {
    searchKey,
    setSearchKey,
    filters,
    isVisible,
    setIsVisible,
  }
}

export default useLookup
