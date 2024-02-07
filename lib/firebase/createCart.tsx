import { addDoc, collection, getDocs, query, where } from "firebase/firestore"
import { db } from "./db"

const createCart = async (cartData) => {
  const data = {
    ...cartData,
    timestamp: Date.now(),
  }

  const q = query(collection(db, "carts"), where("productId", "==", cartData.productId))
  const querySnapshot = await getDocs(q)

  if (querySnapshot.size) return querySnapshot.docs[0].id

  const newCart = await addDoc(collection(db, "carts"), data)
  return newCart.id
}

export default createCart
