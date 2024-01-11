import { CHAIN_ID } from "./consts"
import { get1155Contracts } from "./zora/get1155Contracts"
import { getAll1155Tokens } from "./zora/getAll1155Tokens"

const getDefaultFeed = async () => {
  const editionResponse = await get1155Contracts(CHAIN_ID)
  const contract1155Addresses = editionResponse.map((contract) => contract.newContract)
  const editionTokenResponse = await getAll1155Tokens(contract1155Addresses, CHAIN_ID)

  return editionTokenResponse.reverse()
}

export default getDefaultFeed
