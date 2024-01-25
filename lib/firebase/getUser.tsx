import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "./db"

const getUser = async (privyEmail) => {
  try {
    const q = query(collection(db, "users"), where("privy_email", "==", privyEmail))

    const querySnapshot = await getDocs(q)

    if (querySnapshot.size > 0)
      return {
        id: querySnapshot.docs[0].id,
        ...querySnapshot.docs[0].data(),
      }

    return null
  } catch (error) {
    return null
  }
}

export default getUser
