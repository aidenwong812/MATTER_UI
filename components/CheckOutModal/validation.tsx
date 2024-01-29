import JoiBase from "joi"

export const validation = JoiBase.object({
  delivery_first_name: JoiBase.string().messages({
    "string.empty": `Please fill out this field.`,
  }),
  delivery_last_name: JoiBase.string().messages({
    "string.empty": `Please fill out this field.`,
  }),
  delivery_address1: JoiBase.string().messages({
    "string.empty": `Please fill out this field.`,
  }),
  delivery_address2: JoiBase.allow(),
  delivery_zip_code: JoiBase.string().messages({
    "string.empty": `Please fill out this field.`,
  }),
  delivery_state: JoiBase.string().messages({
    "string.empty": `Please fill out this field.`,
  }),
  delivery_country_code: JoiBase.string().messages({
    "string.empty": `Please fill out this field.`,
  }),
  delivery_phone_number: JoiBase.string().messages({
    "string.empty": `Please fill out this field.`,
  }),
  delivery_country: JoiBase.string().messages({
    "string.empty": `Please fill out this field.`,
  }),
})
