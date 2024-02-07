import { doc, getDoc } from "firebase/firestore"
import { db } from "./db"

const getProductById = async (productId) => {
  try {
    const productData = await getDoc(doc(db, "products", productId))

    if (!productData.exists()) return null
    const customerData = await getDoc(doc(db, "customers", productData.data().customerId))

    return {
      id: productData.id,
      ...productData.data(),
      customer: {
        id: customerData.id,
        ...customerData.data(),
      },
    }
  } catch (error) {
    return { error }
  }
}

export default getProductById
