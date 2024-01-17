import { addDoc, collection } from "firebase/firestore"
import { db } from "./db"

const createProduct = async (productData) => {
  const data = {
    ...productData,
    timestamp: Date.now(),
  }
  await addDoc(collection(db, "products"), data)
}

export default createProduct
