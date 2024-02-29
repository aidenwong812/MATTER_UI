import { doc, getDoc } from "firebase/firestore"
import { db } from "./db"
import getBusinessByCustomerId from "./getBusinessByCustomerId"

const getCustomerAndBusinesses = async (customerId) => {
  try {
    const customer = await getDoc(doc(db, "customers", customerId))
    const business = await getBusinessByCustomerId(customerId)

    return {
      customer: {
        id: customer.id,
        ...customer.data(),
      },
      business,
    }
  } catch (error) {
    return null
  }
}

export default getCustomerAndBusinesses
