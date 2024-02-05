import { createHandler, Get, Query } from "next-api-decorators"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../../../lib/firebase/db"

class CreateBusinessAccount {
  @Get()
  async createBusiness(@Query() query) {
    try {
      const { displayName, userName, website, agreeToPrivacyAndTerms, marketingSelected } = query

      const newDoc = await addDoc(collection(db, "business"), {
        businessName: displayName,
        userName,
        website,
        agreeToPrivacyAndTerms: agreeToPrivacyAndTerms.toLowerCase() === "true",
        marketingSelected: marketingSelected.toLowerCase() === "true",
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
