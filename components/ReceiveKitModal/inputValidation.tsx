import JoiBase from "joi"

const inputValidation = JoiBase.object({
  firstname: JoiBase.string().messages({
    "string.empty": `First Name cannot be an empty field`,
  }),
  familyname: JoiBase.string().messages({
    "string.empty": `Family Name cannot be an empty field`,
  }),
  useremail: JoiBase.string().messages({
    "string.empty": `Email cannot be an empty field`,
  }),
})

export { inputValidation }
