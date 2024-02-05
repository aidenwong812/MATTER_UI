import { createHandler, Get, Query } from "next-api-decorators"
import getCustomerByUserName from "../../../lib/firebase/getCustomerByUserName"
import createBusinessAccount from "../../../lib/firebase/createBusiness"

class CreateBusinessAccount {
  @Get()
  async createBusiness(@Query() query) {
    try {
      const { displayName, userName, website, agreeToPrivacyAndTerms, marketingSelected } = query

      const customerId = await getCustomerByUserName(userName)

      if (!customerId)
        return {
          success: false,
          result: null,
        }

      const productId = await createBusinessAccount(
        {
          businessName: displayName,
          customerId,
          website,
          agreeToPrivacyAndTerms: Boolean(agreeToPrivacyAndTerms),
          marketingSelected: Boolean(marketingSelected),
        },
        customerId,
      )

      return {
        success: true,
        result: productId,
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
