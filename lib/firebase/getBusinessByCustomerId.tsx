import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "./db"

const getBusinessByCustomerId = async (customerId) => {
  try {
    const q = query(collection(db, "business"), where("customerId", "==", customerId))
    const querySnapshot = await getDocs(q)

    if (querySnapshot.size > 0) {
      return {
        id: querySnapshot.docs[0].id,
        ...querySnapshot.docs[0].data(),
      }
    }

    return null
  } catch (error) {
    return null
  }
}

export default getBusinessByCustomerId
