import { createHandler, Get, Query } from "next-api-decorators"
import getDocument from "../../../lib/firebase/getDocument"

class GetProductData {
  @Get()
  async getProductData(@Query() query) {
    try {
      const { id } = query

      const product = await getDocument("products", id)

      return {
        success: true,
        result: product,
      }
    } catch (error) {
      return {
        success: false,
        error,
      }
    }
  }
}

export default createHandler(GetProductData)
