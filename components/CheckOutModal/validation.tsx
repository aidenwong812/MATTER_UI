import JoiBase from "joi"

export const validation = JoiBase.object({
  delivery_firstName: JoiBase.string().messages({
    "string.empty": `Please fill out this field.`,
  }),
  delivery_lastName: JoiBase.string().messages({
    "string.empty": `Please fill out this field.`,
  }),
  delivery_address1: JoiBase.string().messages({
    "string.empty": `Please fill out this field.`,
  }),
  delivery_address2: JoiBase.allow(),
  delivery_zipCode: JoiBase.string().messages({
    "string.empty": `Please fill out this field.`,
  }),
  delivery_state: JoiBase.string().messages({
    "string.empty": `Please fill out this field.`,
  }),
  delivery_countryCode: JoiBase.string().messages({
    "string.empty": `Please fill out this field.`,
  }),
  delivery_phoneNumber: JoiBase.string().messages({
    "string.empty": `Please fill out this field.`,
  }),
  delivery_country: JoiBase.string().messages({
    "string.empty": `Please fill out this field.`,
  }),
})
