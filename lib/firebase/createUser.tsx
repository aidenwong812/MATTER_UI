import { addDoc, collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { db } from "./db"

const createUser = async (userData) => {
  const data = {
    ...userData,
    timestamp: Date.now(),
  }

  const q = query(collection(db, "users"), where("privy_email", "==", userData.privy_email))

  const querySnapshot = await getDocs(q)

  if (querySnapshot.size > 0) {
    await updateDoc(doc(db, "users", querySnapshot.docs[0].id), userData)
    return
  }
  await addDoc(collection(db, "users"), data)
}

export default createUser
