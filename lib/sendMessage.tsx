import axios from "axios"

const sendMessage = async (name, email, subject, message, replyTo) => {
  try {
    const response = await axios.post(`/api/contact/message`, {
      name,
      email,
      subject,
      message,
      replyTo,
    })

    return response
  } catch (err) {
    return { err }
  }
}

export default sendMessage
