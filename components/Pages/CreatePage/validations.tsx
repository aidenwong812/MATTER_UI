import JoiBase from "joi"

export const validation = JoiBase.object({
  title: JoiBase.string().messages({
    "string.empty": `Please fill out this field.`,
  }),
  description: JoiBase.string().messages({
    "string.empty": `Please fill out this field.`,
  }),
})
