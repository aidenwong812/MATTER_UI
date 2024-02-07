import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "./db"

const getCustomerByUserName = async (userName) => {
  try {
    const q = query(collection(db, "customers"), where("userName", "==", userName))

    const querySnapshot = await getDocs(q)

    if (querySnapshot.size > 0) return querySnapshot.docs[0].id

    return null
  } catch (error) {
    return null
  }
}

export default getCustomerByUserName
