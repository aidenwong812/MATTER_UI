import { useEffect, useState } from "react"
import getListings from "../lib/firebase/getListings"
import { useUserProvider } from "../providers/UserProvider"

const useMyListings = () => {
  const [listingProducts, setListingProducts] = useState([])
  const { userData } = useUserProvider()

  useEffect(() => {
    const init = async () => {
      const response = await getListings(userData?.id)

      setListingProducts(response)
    }

    if (!userData) return

    init()
  }, [userData])

  return {
    listingProducts,
  }
}

export default useMyListings
