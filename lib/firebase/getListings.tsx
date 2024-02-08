import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore"
import { db } from "./db"

const getListings = async (customerId) => {
  try {
    const q = query(collection(db, "products"), where("customerId", "==", customerId))
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

export default getListings
