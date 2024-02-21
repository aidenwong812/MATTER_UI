import JoiBase from "joi"
import { fileListExtension } from "joi-filelist"

const Joi = fileListExtension(JoiBase)

const allowImageFile = (value: string, helper: any) => {
  const files = Array.from(value)

  const file = files[0] as any

  if (file.type.search("image") < 0) {
    return helper.message("Please upload correct type media.")
  }

  return value
}

export const validation = JoiBase.object({
  product_name: Joi.string().messages({
    "string.empty": `Please fill out this field.`,
  }),
  product_description: Joi.string().messages({
    "string.empty": `Please fill out this field.`,
  }),
  product_type: Joi.allow(),
  price: Joi.allow(),
  total_supply: Joi.allow(),
  product_category: Joi.allow(),
  content: Joi.allow(),
  cover: Joi.filelist()
    .required()
    .messages({
      "any.required": "Please upload media.",
    })
    .maxSize(1024 * 1024 * 1024 * 2)
    .max(1)
    .custom(allowImageFile)
    .messages({
      "filelist.maxsize": "Only file of size less than 2GB are allowed",
      "filelist.max": "Only upto 1 file are allowed",
      "any.empty": "Please upload media.",
    }),
})
