import { CHAIN_ID } from "./consts"
import { get1155Contracts } from "./zora/get1155Contracts"
import { getAll1155Tokens } from "./zora/getAll1155Tokens"

const getDefaultFeed = async () => {
  const editionResponse = await get1155Contracts(CHAIN_ID)
  const all1155Contracts = editionResponse.map((contract) => ({
    contractAddress: contract.newContract,
    contractName: contract.contractName,
  }))
  const editionTokenResponse = await getAll1155Tokens(all1155Contracts, CHAIN_ID)

  return editionTokenResponse.reverse()
}

export default getDefaultFeed
