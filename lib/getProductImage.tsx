import axios from "axios"
import { getIpfsLink } from "onchain-magic"

const getProductImage = async (ipfs) => {
  try {
    const response = await axios.get(getIpfsLink(ipfs))

    return getIpfsLink(response.data.image)
  } catch (error) {
    return ""
  }
}

export default getProductImage
