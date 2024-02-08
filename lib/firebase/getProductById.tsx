import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore"
import { db } from "./db"

const getProductById = async (productId) => {
  try {
    const productData = await getDoc(doc(db, "products", productId))

    if (!productData.exists()) return null
    const customerData = await getDoc(doc(db, "customers", productData.data().customerId))
    const q = query(collection(db, "business"), where("customerId", "==", customerData.id))
    const querySnapshot = await getDocs(q)

    return {
      id: productData.id,
      ...productData.data(),
      customer: {
        id: customerData.id,
        ...customerData.data(),
        business: querySnapshot.size
          ? {
              id: querySnapshot.docs[0].id,
              ...querySnapshot.docs[0].data(),
            }
          : null,
      },
    }
  } catch (error) {
    return { error }
  }
}

export default getProductById
