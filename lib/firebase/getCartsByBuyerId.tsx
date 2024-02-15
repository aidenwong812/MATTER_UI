import { and, collection, doc, getDoc, getDocs, query, where } from "firebase/firestore"
import { db } from "./db"
import getBusinessByCustomerId from "./getBusinessByCustomerId"

const getCartsByBuyerId = async (buyerId, isPurchased = false) => {
  try {
    const q = query(
      collection(db, "carts"),
      and(where("buyerId", "==", buyerId), where("purchased", "==", isPurchased)),
    )
    const querySnapshot = await getDocs(q)

    if (querySnapshot.size > 0) {
      const cartsPromise = querySnapshot.docs.map(async (data) => {
        const product = await getDoc(doc(db, "products", data.data().productId))
        const customer = await getDoc(doc(db, "customers", data.data().customerId))
        const business = await getBusinessByCustomerId(data.data().customerId)

        return {
          id: data.id,
          ...data.data(),
          product: {
            id: product.id,
            ...product.data(),
          },
          customer: {
            id: customer.id,
            ...customer.data(),
          },
          business,
        }
      })

      return await Promise.all(cartsPromise)
    }

    return []
  } catch (error) {
    return []
  }
}

export default getCartsByBuyerId
