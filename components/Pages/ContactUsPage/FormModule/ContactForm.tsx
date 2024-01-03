import { useState } from "react"
import { toast } from "react-toastify"
import Form from "../../../../shared/Form"
import { inputValidation } from "./inputValidation"
import Button from "../../../../shared/Button"
import sendMessage from "../../../../lib/sendMessage"
import TextInput from "../../../TextInput"
import { CLIENT_EMAIL } from "../../../../lib/consts"

const ContactForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [telephone, setTelephone] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const [isSendingMessage, setIsSendingMessage] = useState(false)

  const send = async (values) => {
    setIsSendingMessage(true)

    const mailSubject = "Contact Us - Financial Verse"
    const clientContent = `We've received one message!\n
      Name: ${name}\n
      Email: ${email}\n
      Telephone: ${telephone}\n
      Subject: ${subject}\n
      Message: ${message}`

    let response: any = await sendMessage(
      values.name,
      CLIENT_EMAIL,
      mailSubject,
      clientContent,
      email,
    )

    if (response?.err) {
      toast.error("Failed sending message to client!")
      setIsSendingMessage(false)
      return
    }

    const recipientData = `Thank you for your message in Financial Verse.!\n
      Name: ${name}\n
      Email: ${email}\n
      Telephone: ${telephone}\n
      Subject: ${subject}\n
      Message: ${message}`

    response = await sendMessage(
      values.name,
      values.email,
      mailSubject,
      recipientData,
      CLIENT_EMAIL,
    )

    if (response?.err) {
      toast.error("Failed sending message to you!")
      setIsSendingMessage(false)
      return
    }

    toast.success("Message was sent successfully!")

    setIsSendingMessage(false)
  }

  return (
    <Form
      onSubmit={async ({ ...values }) => {
        send(values)
      }}
      validationSchema={inputValidation}
      className="w-full flex flex-col gap-y-[10px]"
    >
      <div
        className="grid 
        grid-cols-1 md:grid-cols-2
        xl:gap-y-[20px] lg:gap-y-[16px] md:gap-y-[12px] 
        xl:gap-x-[30px] lg:gap-x-[24px] md:gap-x-[18px]
        gap-y-[20px]"
      >
        <TextInput
          label="Name"
          value={name}
          onChange={setName}
          placeholder="Input Name Here"
          id="name"
          hookToForm
        />
        <TextInput
          label="Email"
          value={email}
          onChange={setEmail}
          placeholder="Input Email Here"
          id="email"
          hookToForm
        />
        <TextInput
          label="Telephone"
          value={telephone}
          onChange={setTelephone}
          placeholder="Input Number Here"
          id="telephone"
          hookToForm
        />
        <TextInput
          label="Subject"
          value={subject}
          onChange={setSubject}
          placeholder="Put Subject Here"
          id="subject"
          hookToForm
        />
        <TextInput
          label="Message"
          value={message}
          onChange={setMessage}
          placeholder="Fill in Message Here"
          id="message"
          className="col-span-1 md:col-span-2"
          type="multiple"
          hookToForm
        />
      </div>
      <div className="pt-[20px]">
        <Button
          id="trade_submit_btn"
          type="submit"
          className={`!w-full font-poppins_semibold
          rounded-full
          xl:h-[68px] lg:h-[54.4px] md:h-[40.8px] h-[40px]
          md:text-[10.8px] lg:text-[14.4px] xl:text-[18px]
          ${
            isSendingMessage
              ? "bg-[gray] !text-[#484848] cursor-not-allowed"
              : "bg-[#54B3C3] !text-white"
          }`}
          disabled={isSendingMessage}
        >
          Send a Message
        </Button>
      </div>
    </Form>
  )
}

export default ContactForm
