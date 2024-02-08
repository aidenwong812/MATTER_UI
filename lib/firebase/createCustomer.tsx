import { addDoc, collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { db } from "./db"
import handleTxError from "../handleTxError"

const createCustomer = async (customerData) => {
  try {
    const data = {
      ...customerData,
      timestamp: Date.now(),
    }

    const q = query(collection(db, "customers"), where("privyEmail", "==", customerData.privyEmail))

    const querySnapshot = await getDocs(q)

    if (querySnapshot.size > 0) {
      await updateDoc(doc(db, "customers", querySnapshot.docs[0].id), {
        ...querySnapshot.docs[0].data(),
        ...customerData,
      })
      return { error: false }
    }
    await addDoc(collection(db, "customers"), data)
    return { error: false }
  } catch (err) {
    handleTxError(err)
    return { error: err }
  }
}

export default createCustomer
