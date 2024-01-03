import { createHandler, Post, Body } from "next-api-decorators"
import axios from "axios"

class SendMessage {
  @Post()
  async sendEmail(
    @Body()
    body: {
      name: string
      email: string
      subject: string
      message: string
      replyTo: string
    },
  ) {
    const { name, email, message, replyTo, subject } = body

    const from = {
      email: "enjoy@onchainmagic.xyz",
      name: "Financial Verse",
    }

    const data = {
      personalizations: [
        {
          to: [{ email, name }],
          subject,
        },
      ],
      content: [
        {
          type: "text/plain",
          value: message,
        },
      ],
      from,
      reply_to: {
        email: replyTo,
      },
    }

    const headers = {
      headers: {
        Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
        "Content-Type": "application/json",
      },
    }

    try {
      const response = await axios.post("https://api.sendgrid.com/v3/mail/send", data, headers)
      return response.data
    } catch (err) {
      throw new Error(err)
    }
  }
}

export default createHandler(SendMessage)
