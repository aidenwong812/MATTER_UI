import { CHAIN_ID } from "./consts"
import { getCreatedDrops } from "./zora/getCreatedDrops"

const getDefaultFeed = async () => {
  const response = await getCreatedDrops(CHAIN_ID)
  return response.reverse()
}

export default getDefaultFeed
