import axios from "axios"
import getAlchemyBaseUrl from "./getAlchemyBaseUrl"
import { CHAIN_ID } from "../consts"

const getNFTs = async (address: string, contractAddress: string) => {
  const alchemyKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY
  const { data } = await axios.get(
    `${getAlchemyBaseUrl(
      CHAIN_ID,
    )}nft/v2/${alchemyKey}/getNFTs?owner=${address}&contractAddresses%5B%5D=${contractAddress}`,
  )
  return data
}

export default getNFTs
