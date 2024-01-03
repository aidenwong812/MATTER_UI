import axios from "axios"
import { createHandler, Get, Query } from "next-api-decorators"
import querystring from "querystring"

const URL = "https://api.stripe.com/v1/crypto/onramp_sessions"

class GetStripeOnramp {
  @Get()
  async metadata(@Query("sourceAmount") sourceAmount: string) {
    const options = {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_STRIPE_SECRET_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }

    const params = {
      "wallet_addresses[ethereum]": "0xcfBf34d385EA2d5Eb947063b67eA226dcDA3DC38",
      source_currency: "usd",
      destination_currency: "usdc",
      destination_network: "ethereum",
      source_amount: sourceAmount,
    }

    try {
      const response = await axios.post(URL, querystring.stringify(params), options)
      return response.data
    } catch (err) {
      return err
    }
  }
}

export default createHandler(GetStripeOnramp)
