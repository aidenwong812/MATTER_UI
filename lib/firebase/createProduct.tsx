import { addDoc, collection } from "firebase/firestore"
import { db } from "./db"

const createProduct = async (productData) => {
  const data = {
    ...productData,
    timestamp: Date.now(),
  }
  const newProduct = await addDoc(collection(db, "products"), data)

  return newProduct.id
}

export default createProduct
