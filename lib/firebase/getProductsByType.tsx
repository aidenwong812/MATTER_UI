import { collection, getDocs, query, where } from "firebase/firestore"
import { CHAIN_ID } from "@/lib/consts"
import { db } from "./db"
import getCustomerAndBusinesses from "./getCustomerAndBusinesses"

const getProductsByType = async (type) => {
  try {
    const q = query(collection(db, "products"), where("productType", "==", type))
    const querySnapshot = await getDocs(q)

    if (querySnapshot.size > 0) {
      const productsPromise = querySnapshot.docs
        .filter((one) => one.data().chainId === CHAIN_ID)
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

export default getProductsByType
