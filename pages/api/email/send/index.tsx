import { createHandler, Get, Query } from "next-api-decorators"
import axios from "axios"

class SendEmail {
  @Get()
  async sendEmail(@Query("amountUsdc") amountUsdc: number, @Query("emails") emails: string) {
    const emailArray = emails.split(",")

    const personalizations = emailArray.map((email) => ({
      to: [{ email, name: "" }], // Name is empty as it's not provided
      subject: "New Distribution - Financial Verse",
    }))

    const data = {
      personalizations,
      content: [
        {
          type: "text/plain",
          value: `Distribution Sent!\n
          Amount: $${amountUsdc} USD
          See all reports on your dashboard: https://financialverse.vercel.app/dashboard`,
        },
      ],
      from: {
        email: "enjoy@onchainmagic.xyz",
        name: "Financial Verse",
      },
      reply_to: {
        email: "enjoy@onchainmagic.xyz",
        name: "Financial Verse",
      },
    }

    try {
      const response = await axios.post("https://api.sendgrid.com/v3/mail/send", data, {
        headers: {
          Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
          "Content-Type": "application/json",
        },
      })
      return response.data
    } catch (err) {
      return err.response.data
    }
  }
}

export default createHandler(SendEmail)
