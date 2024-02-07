import { collection, getDocs } from "firebase/firestore"
import { db } from "./db"

const getProducts = async () => {
  try {
    const productsSnapshot = await getDocs(collection(db, "products"))

    return productsSnapshot.docs.map((product) => ({
      id: product.id,
      ...product.data(),
      type: "product",
    }))
  } catch (error) {
    throw new Error(error)
  }
}

export default getProducts
