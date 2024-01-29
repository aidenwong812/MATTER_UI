import JoiBase from "joi"
import { fileListExtension } from 'joi-filelist'

const Joi = fileListExtension(JoiBase)

const allowImageFile = (value: string, helper: any) => {
    const files = Array.from(value)
  
    const file = files[0] as any

    if (file.type.search('image') < 0) {
      return helper.message('Please upload correct type media.')
    }
    
    return value
  }

export const validation = JoiBase.object({
  title: Joi.string().messages({
    "string.empty": `Please fill out this field.`,
  }),
  description: Joi.string().messages({
    "string.empty": `Please fill out this field.`,
  }),
  cover: Joi.filelist()
  .required()
  .messages({
    'any.required': 'Please upload media.'
  })
  .maxSize(1024 * 1024 * 1024 * 2)
  .max(1)
  .custom(allowImageFile)
  .messages({
    'filelist.maxsize':
      'Only file of size less than 2GB are allowed',
    'filelist.max': 'Only upto 1 file are allowed',
    'any.empty': 'Please upload media.'
  })
})
