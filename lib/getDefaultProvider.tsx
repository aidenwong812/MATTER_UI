import { ethers } from "ethers"
import getAlchemyBaseUrl from "./alchemy/getAlchemyBaseUrl"

const getDefaultProvider = (chainId: number) => {
  const base = getAlchemyBaseUrl(chainId)
  const rpc = `${base}v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`
  return ethers.getDefaultProvider(rpc)
}

export default getDefaultProvider
