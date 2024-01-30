import JoiBase from "joi"

export const validation = JoiBase.object({
  verifycode: JoiBase.string().messages({
    "string.empty": `Please fill out this field.`,
  }),
  username: JoiBase.string().messages({
    "string.empty": `Please fill out this field.`,
  }),
  businessName: JoiBase.string().messages({
    "string.empty": `Please fill out this field.`,
  }),
  businessSite: JoiBase.string().messages({
    "string.empty": `Please fill out this field.`,
  }),
})
