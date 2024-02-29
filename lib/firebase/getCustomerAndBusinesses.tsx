import { doc, getDoc } from "firebase/firestore"
import { db } from "./db"
import getBusinessByCustomerId from "./getBusinessByCustomerId"

const getCustomerAndBusinesses = async (customerId) => {
  try {
    const getCustomer = async () => {
      const customer = await getDoc(doc(db, "customers", customerId))
      return {
        customer: {
          id: customer.id,
          ...customer.data(),
        },
      }
    }
    const getBusiness = async () => {
      const business = await getBusinessByCustomerId(customerId)
      return {
        business,
      }
    }

    return await Promise.all([getBusiness(), getCustomer()])
  } catch (error) {
    return []
  }
}

export default getCustomerAndBusinesses
