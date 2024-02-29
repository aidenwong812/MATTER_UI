import { collection, getDocs, query, where } from "firebase/firestore"
import { CHAIN_ID } from "@/lib/consts"
import { db } from "./db"
import getCustomerAndBusinesses from "./getCustomerAndBusinesses"

const getListings = async (customerId) => {
  try {
    const q = query(collection(db, "products"), where("customerId", "==", customerId))
    const querySnapshot = await getDocs(q)

    if (querySnapshot.size > 0) {
      const productsPromise = querySnapshot.docs
        .filter((one) => one.data().chainId === CHAIN_ID)
        .map((data) =>
          getCustomerAndBusinesses(data.data().customerId).then(({ business, customer }) => ({
            id: data.id,
            ...data.data(),
            customer,
            business,
          })),
        )

      return await Promise.all(productsPromise)
    }

    return []
  } catch (error) {
    return []
  }
}

export default getListings
