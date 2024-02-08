import { addDoc, collection } from "firebase/firestore"
import { db } from "./db"
import handleTxError from "../handleTxError"

const createProduct = async (productData) => {
  try {
    const data = {
      ...productData,
      timestamp: Date.now(),
    }
    const newProduct = await addDoc(collection(db, "products"), data)

    return newProduct.id
  } catch (error) {
    handleTxError(error)
    return { error }
  }
}

export default createProduct
