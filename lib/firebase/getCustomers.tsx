import { collection, getDocs } from "firebase/firestore"
import { db } from "./db"

const getCustomers = async () => {
  try {
    const customersSnapshot = await getDocs(collection(db, "business"))

    return customersSnapshot.docs.map((customer) => ({
      id: customer.id,
      ...customer.data(),
      type: "customer",
    }))
  } catch (error) {
    throw new Error(error)
  }
}

export default getCustomers
