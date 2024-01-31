import { addDoc, collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { db } from "./db"

const createBusinessAccount = async (businessData, customerId) => {
  const data = {
    ...businessData,
    timestamp: Date.now(),
    isApproved: false,
  }

  const q = query(collection(db, "business"), where("customerId", "==", customerId))

  const querySnapshot = await getDocs(q)

  if (querySnapshot.size > 0) {
    await updateDoc(doc(db, "business", querySnapshot.docs[0].id), businessData)
    return
  }
  await addDoc(collection(db, "business"), data)
}

export default createBusinessAccount
