import JoiBase from "joi"

export const validation = JoiBase.object({
  username: JoiBase.string().messages({
    "string.empty": `Please fill out this field.`,
  }),
  useremail: JoiBase.string()
    .email({ tlds: { allow: false } })
    .messages({
      "string.empty": `Please fill out this field.`,
      "string.email": `Please enter a valid email address.`,
    }),
})
