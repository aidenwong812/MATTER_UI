import axios from "axios"
import { CHAIN_ID } from "../consts"
import getAlchemyRpcUrl from "./getAlchemyRpcUrl"

const getOwnersForCollection = async (contractAddress) => {
  const response = await axios.get(`${getAlchemyRpcUrl(CHAIN_ID)}/getOwnersForCollection`, {
    params: {
      contractAddress,
    },
  })

  return response.data.ownerAddresses
}

export default getOwnersForCollection
