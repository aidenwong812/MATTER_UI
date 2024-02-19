import { useEffect, useRef, useState } from "react"
import getProducts from "../lib/firebase/getProducts"
import getCustomers from "../lib/firebase/getCustomers"

const useLookup = () => {
  const [searchKey, setSearchKey] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const lookupRef = useRef() as any

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
        item?.productName?.toLowerCase().search(searchKey.toLowerCase()) >= 0 ||
        item?.businessName?.toLowerCase().search(searchKey.toLowerCase()) >= 0,
    )

    setFilters(data.slice(0, 10))
  }, [products, customers, searchKey])

  useEffect(() => {
    const handleClose = (e) => {
      if (!lookupRef?.current) return

      if (lookupRef.current.contains(e.target)) return

      setIsVisible(false)
    }

    document.addEventListener("mousedown", handleClose)

    return () => document.removeEventListener("mousedown", handleClose)
  }, [lookupRef])

  return {
    searchKey,
    setSearchKey,
    filters,
    isVisible,
    setIsVisible,
    lookupRef,
  }
}

export default useLookup
