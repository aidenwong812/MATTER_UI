import { addDoc, collection } from "firebase/firestore"
import { db } from "./db"

const createCart = async (cartData) => {
  const data = {
    ...cartData,
    timestamp: Date.now(),
  }
  const newCart = await addDoc(collection(db, "carts"), data)

  return newCart.id
}

export default createCart
