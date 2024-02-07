import { createHandler, Get, Query } from "next-api-decorators"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../../../lib/firebase/db"
import getDocument from "../../../lib/firebase/getDocument"
import getBusinessByCustomerId from "../../../lib/firebase/getBusinessByCustomerId"

class CreateBusinessAccount {
  @Get()
  async createBusiness(@Query() query) {
    try {
      const {
        displayName,
        userName,
        website,
        agreeToPrivacyAndTerms,
        marketingSelected,
        customerId,
      } = query

      const customerData = await getDocument("customers", customerId)
      const { error } = customerData as any
      if (error)
        return {
          success: false,
          error: "Customer is not existed!",
        }

      const businessData = await getBusinessByCustomerId(customerId)
      if (businessData)
        return {
          success: false,
          error: "Business account is existed!",
        }

      const newDoc = await addDoc(collection(db, "business"), {
        businessName: displayName,
        userName,
        customerId,
        website,
        agreeToPrivacyAndTerms: agreeToPrivacyAndTerms.toLowerCase() === "true",
        marketingSelected: marketingSelected.toLowerCase() === "true",
        timestamp: Date.now(),
        verifiedAt: 0,
      })

      return {
        success: true,
        result: newDoc.id,
      }
    } catch (error) {
      return {
        success: false,
        error,
      }
    }
  }
}

export default createHandler(CreateBusinessAccount)
