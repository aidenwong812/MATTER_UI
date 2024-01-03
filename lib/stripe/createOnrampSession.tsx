import axios from "axios"
import { BigNumber } from "ethers"

const createOnrampSession = async (sourceAmount: string) => {
  const finalAmount = BigNumber.from(sourceAmount).gt(1400) ? "1400" : sourceAmount

  try {
    const response = await axios.get(`/api/stripe/onramp?sourceAmount=${finalAmount}`)
    const { data } = response
    const { redirect_url: url } = data
    window.open(url, "_blank")
    return url
  } catch (error) {
    return error
  }
}

export default createOnrampSession
