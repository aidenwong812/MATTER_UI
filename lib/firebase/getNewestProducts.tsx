import { collection, getDocs, orderBy, query } from "firebase/firestore"
import { CHAIN_ID } from "@/lib/consts"
import { db } from "./db"
import getCustomerAndBusinesses from "./getCustomerAndBusinesses"

const getNewestProducts = async () => {
  try {
    const q = query(collection(db, "products"), orderBy("timestamp", "desc"))
    const querySnapshot = await getDocs(q)

    if (querySnapshot.size > 0) {
      const productsPromise = querySnapshot.docs
        .filter((one) => one.data().chainId === CHAIN_ID)
        .slice(0, 10)
        .map(async (data) => {
          const response = await getCustomerAndBusinesses(data.data().customerId)
          const { business } = response[0]
          const { customer } = response[1]

          return {
            id: data.id,
            ...data.data(),
            customer,
            business,
          }
        })

      return await Promise.all(productsPromise)
    }

    return []
  } catch (error) {
    return []
  }
}

export default getNewestProducts
