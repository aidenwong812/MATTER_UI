import { addDoc, collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { db } from "./db"

const createCustomer = async (customerData) => {
  const data = {
    ...customerData,
    timestamp: Date.now(),
  }

  const q = query(collection(db, "customers"), where("email", "==", customerData.email))

  const querySnapshot = await getDocs(q)

  if (querySnapshot.size > 0) {
    await updateDoc(doc(db, "customers", querySnapshot.docs[0].id), {
      ...querySnapshot.docs[0].data(),
      ...customerData,
    })
    return
  }
  await addDoc(collection(db, "customers"), data)
}

export default createCustomer
