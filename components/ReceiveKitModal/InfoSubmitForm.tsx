import { useState } from "react"
import { toast } from "react-toastify"
import Form from "../../shared/Form"
import { inputValidation } from "./inputValidation"
import Button from "../../shared/Button"
import TextInput from "../TextInput"
import sendMessage from "../../lib/sendMessage"
import { CLIENT_EMAIL } from "../../lib/consts"

const InfoSubmitForm = () => {
  const [loading, setLoading] = useState(false)

  const submitInformation = async (values: any) => {
    setLoading(true)

    const content = `FinancialVerse - Request for Information Kit!\n
    Name: ${values.firstname} ${values.familyname}\n
    Email: ${values.useremail}`

    const response: any = await sendMessage(
      `${values.firstname} ${values.familyname}`,
      CLIENT_EMAIL,
      "FinancialVerse - Request for Information Kit!",
      content,
      values.useremail,
    )

    if (response?.err) {
      toast.error("Join Us failed.")
      setLoading(false)
      return
    }

    toast.success("Kit sent!")
    setLoading(false)
  }

  const [firstname, setFirstName] = useState("")
  const [familyname, setFamilyName] = useState("")
  const [email, setEmail] = useState("")

  return (
    <Form
      onSubmit={async ({ ...values }) => {
        submitInformation(values)
      }}
      validationSchema={inputValidation}
      className="w-full flex flex-col gap-y-[10px] mt-[20px]"
    >
      <div className="flex flex-col">
        <TextInput
          label="First Name"
          value={firstname}
          onChange={setFirstName}
          placeholder="John"
          id="firstname"
          hookToForm
        />
      </div>
      <div className="flex flex-col">
        <TextInput
          label="Family Name"
          value={familyname}
          onChange={setFamilyName}
          placeholder="Doe"
          id="familyname"
          hookToForm
        />
      </div>
      <div className="flex flex-col">
        <TextInput
          label="Email"
          value={email}
          onChange={setEmail}
          placeholder="john.doe@gmail.com"
          id="useremail"
          hookToForm
        />
      </div>
      <div className="pt-[20px]">
        <Button
          id="info_submit_btn"
          type="submit"
          className={`xl:h-[47px] lg:h-[37.6px] md:h-[28.2px] 
          xl:w-[146px] lg:w-[116.8px] md:w-[87.6px] 
          font-poppins_semibold
          ${
            loading ? "bg-[lightgray] text-[white] cursor-not-allowed" : "bg-[#54B3C3] text-[white]"
          }
          md:text-[10.8px] lg:text-[14.4px] xl:text-[18px]`}
          disabled={loading}
        >
          Submit
        </Button>
      </div>
    </Form>
  )
}

export default InfoSubmitForm
