import JoiBase from "joi"

const inputValidation = JoiBase.object({
  name: JoiBase.string().messages({
    "string.empty": `Name cannot be an empty field`,
  }),
  email: JoiBase.string().messages({
    "string.empty": `Email cannot be an empty field`,
  }),
  telephone: JoiBase.string().messages({
    "string.empty": `Telephone cannot be an empty field`,
  }),
  subject: JoiBase.string().messages({
    "string.empty": `Subject cannot be an empty field`,
  }),
  message: JoiBase.string().messages({
    "string.empty": `Message cannot be an empty field`,
  }),
})

export { inputValidation }
