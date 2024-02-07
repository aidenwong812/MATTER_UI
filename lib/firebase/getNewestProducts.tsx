import { collection, doc, getDoc, getDocs, orderBy, query } from "firebase/firestore"
import { db } from "./db"

const getNewestProducts = async () => {
  try {
    const q = query(collection(db, "products"), orderBy("timestamp", "desc"))
    const querySnapshot = await getDocs(q)

    if (querySnapshot.size > 0) {
      const productsPromise = querySnapshot.docs.slice(0, 10).map(async (data) => {
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

export default getNewestProducts
