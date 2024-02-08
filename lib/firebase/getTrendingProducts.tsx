import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore"
import { db } from "./db"
import { ONE_DAY_MILLISECONDS } from "../consts"

const getTrendingProducts = async () => {
  try {
    const last30DaysMillios = new Date().getTime() - 30 * ONE_DAY_MILLISECONDS

    const q = query(collection(db, "products"), where("timestamp", ">=", last30DaysMillios))
    const querySnapshot = await getDocs(q)

    if (querySnapshot.size > 0) {
      const productsPromise = querySnapshot.docs.map(async (data) => {
        const customer = await getDoc(doc(db, "customers", data.data().customerId))
        return {
          id: data.id,
          ...data.data(),
          customer: {
            id: customer.id,
            ...customer.data(),
          },
        }
      })

      return await Promise.all(productsPromise)
    }

    return []
  } catch (error) {
    return []
  }
}

export default getTrendingProducts