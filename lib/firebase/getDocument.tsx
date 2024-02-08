import { doc, getDoc } from "firebase/firestore"
import { db } from "./db"

const getDocument = async (collectionName, documentId) => {
  try {
    const docSnap = await getDoc(doc(db, collectionName, documentId))

    if (docSnap.exists())
      return {
        id: docSnap.id,
        ...docSnap.data(),
      }

    return { error: true }
  } catch (error) {
    return { error }
  }
}

export default getDocument
