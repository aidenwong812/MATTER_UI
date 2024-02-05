import { addDoc, collection } from "firebase/firestore"
import { db } from "./db"

const createDocument = async (collectionName, documentData) => {
  const data = {
    ...documentData,
    timestamp: Date.now(),
  }
  const newProduct = await addDoc(collection(db, collectionName), data)

  return newProduct.id
}

export default createDocument
