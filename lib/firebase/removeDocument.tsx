import { deleteDoc, doc } from "firebase/firestore"
import { db } from "./db"

const removeDocument = async (collectionName, id) => {
  if (!id) return

  await deleteDoc(doc(db, collectionName, id))
}

export default removeDocument
