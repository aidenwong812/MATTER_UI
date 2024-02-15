import axios from "axios"
import { getIpfsLink } from "onchain-magic"

const getProductImage = async (ipfs) => {
  try {
    const response = await axios.get(getIpfsLink(ipfs))

    return getIpfsLink(response.data.image || ipfs)
  } catch (error) {
    return getIpfsLink(ipfs)
  }
}

export default getProductImage
