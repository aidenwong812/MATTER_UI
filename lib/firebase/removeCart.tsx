import { deleteDoc, doc } from "firebase/firestore"
import { db } from "./db"

const removeCart = async (cartId) => {
  if (!cartId) return

  await deleteDoc(doc(db, "carts", cartId))
}

export default removeCart
