import { useCallback, useEffect, useState } from "react"
import getListings from "../lib/firebase/getListings"
import { useUserProvider } from "../providers/UserProvider"
import removeDocument from "@/lib/firebase/removeDocument"

const useMyListings = () => {
  const [listingProducts, setListingProducts] = useState([])
  const { userData } = useUserProvider()

  const removeListing = async (id) => {
    await removeDocument("products", id)
    getListingProducts()
  }

  const getListingProducts = useCallback(async () => {
    if (!userData) return
    const response = await getListings(userData?.id)

    setListingProducts(response)
  }, [userData])

  useEffect(() => {
    getListingProducts()
  }, [getListingProducts])

  return {
    listingProducts,
    removeListing,
  }
}

export default useMyListings
