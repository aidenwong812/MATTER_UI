import getDefaultProvider from "./getDefaultProvider"

const getEnsForAddress = async (address) => {
  const resolvedName = await getDefaultProvider(1).lookupAddress(address)
  return resolvedName
}

export default getEnsForAddress
