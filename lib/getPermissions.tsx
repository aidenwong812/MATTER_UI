import { Multicall, ContractCallResults, ContractCallContext } from "ethereum-multicall"
import getDefaultProvider from "./getDefaultProvider"
import abi from "./abi/abi-ERC1155Drop.json"

export const aggregateReads = async (contractAddress, address, chainId) => {
  const adminMinterCalls = [
    {
      reference: "adminPermission",
      methodName: "isAdminOrRole",
      methodParameters: [address, 0, 2],
    },
  ]

  const salesMinterData = [
    {
      reference: "salesPermission",
      methodName: "isAdminOrRole",
      methodParameters: [process.env.NEXT_PUBLIC_FIXED_PRICE_SALE_STRATEGY, 0, 4],
    },
  ]

  const multicall = new Multicall({
    ethersProvider: getDefaultProvider(chainId),
    tryAggregate: true,
  })
  const contractCallContext: ContractCallContext[] = [
    {
      reference: "adminPermission",
      contractAddress,
      abi,
      calls: adminMinterCalls,
    },
    {
      reference: "salesPermission",
      contractAddress,
      abi,
      calls: salesMinterData,
    },
  ]
  const results: ContractCallResults = await multicall.call(contractCallContext)

  return results
}

export const getPermissions = async (dropAddress, connectedWallet, chainId) => {
  const results = await aggregateReads(dropAddress, connectedWallet, chainId)

  const adminPermission = results?.results?.adminPermission?.callsReturnContext[0]?.returnValues[0]
  const salesPermission =
    results?.results?.salesPermission?.callsReturnContext[0]?.returnValues?.[0]

  return {
    adminPermission,
    salesPermission,
  }
}
