import JoiBase from "joi"

export const validation = JoiBase.object({
  username: JoiBase.allow(),
  useremail: JoiBase.allow(),
  business: JoiBase.allow(),
})
