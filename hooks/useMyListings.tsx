import { useCallback, useEffect, useState } from "react"
import removeDocument from "@/lib/firebase/removeDocument"
import getListings from "@/lib/firebase/getListings"
import { useUserProvider } from "@/providers/UserProvider"

const useMyListings = () => {
  const [listingProducts, setListingProducts] = useState([])
  const { userData } = useUserProvider()

  const getListingProducts = useCallback(async () => {
    if (!userData) return
    const response = await getListings(userData?.id)

    setListingProducts(response)
  }, [userData])

  const removeListing = async (id) => {
    await removeDocument("products", id)
    getListingProducts()
  }

  useEffect(() => {
    getListingProducts()
  }, [getListingProducts])

  return {
    listingProducts,
    removeListing,
  }
}

export default useMyListings
