import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore"
import { db } from "./db"
import getBusinessByCustomerId from "./getBusinessByCustomerId"

const getProductsByType = async (type) => {
  try {
    const q = query(collection(db, "products"), where("productType", "==", type))
    const querySnapshot = await getDocs(q)

    if (querySnapshot.size > 0) {
      const productsPromise = querySnapshot.docs.map(async (data) => {
        const customer = await getDoc(doc(db, "customers", data.data().customerId))
        const business = await getBusinessByCustomerId(data.data().customerId)

        return {
          id: data.id,
          ...data.data(),
          customer: {
            id: customer.id,
            ...customer.data(),
          },
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
