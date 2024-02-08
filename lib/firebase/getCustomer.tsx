import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "./db"

const getCustomer = async (privyEmail) => {
  try {
    const q1 = query(collection(db, "customers"), where("privyEmail", "==", privyEmail))

    const querySnapshot1 = await getDocs(q1)

    if (querySnapshot1.size > 0) {
      const q2 = query(
        collection(db, "business"),
        where("customerId", "==", querySnapshot1.docs[0].id),
      )
      const querySnapshot2 = await getDocs(q2)

      return {
        id: querySnapshot1.docs[0].id,
        ...querySnapshot1.docs[0].data(),
        business: querySnapshot2.size
          ? {
              id: querySnapshot2.docs[0].id,
              ...querySnapshot2.docs[0].data(),
            }
          : null,
      }
    }

    return null
  } catch (error) {
    return null
  }
}

export default getCustomer
