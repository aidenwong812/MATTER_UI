import { addDoc, and, collection, getDocs, query, where } from "firebase/firestore"
import { db } from "./db"

const createCart = async (cartData) => {
  const data = {
    ...cartData,
    purchased: false,
    timestamp: Date.now(),
  }

  const q = query(
    collection(db, "carts"),
    and(where("productId", "==", cartData.productId), where("buyerId", "==", cartData.buyerId)),
  )
  const querySnapshot = await getDocs(q)

  if (querySnapshot.size) return querySnapshot.docs[0].id

  const newCart = await addDoc(collection(db, "carts"), data)
  return newCart.id
}

export default createCart
