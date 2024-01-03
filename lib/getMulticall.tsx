import { ContractCallContext, ContractCallResults, Multicall } from "ethereum-multicall"
import getDefaultProvider from "./getDefaultProvider"
import { CHAIN_ID } from "./consts"

const getMulticall = async (reference, contractAddress, abi, calls) => {
  const multicall = new Multicall({
    ethersProvider: getDefaultProvider(CHAIN_ID),
    tryAggregate: true,
  })

  const contractCallContext: ContractCallContext[] = [
    {
      reference,
      contractAddress,
      abi,
      calls,
    },
  ]
  const results: ContractCallResults = await multicall.call(contractCallContext)
  return results
}

export default getMulticall
