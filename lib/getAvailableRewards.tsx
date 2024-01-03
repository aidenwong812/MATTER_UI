import { ContractCallResults } from "ethereum-multicall"
import { USDC_ADDRESS, USDC_SCALE } from "./consts"
import getMulticall from "./getMulticall"
import abi from "./abi/usdc.json"

const getAvailableRewards = async (walletArray) => {
  const calls = []
  for (let i = 0; i < walletArray.length; i += 1) {
    calls.push({
      reference: `balance-${i}`,
      methodName: "balanceOf",
      methodParameters: [walletArray[i]],
    })
  }

  const results: ContractCallResults = await getMulticall("tokenBalances", USDC_ADDRESS, abi, calls)
  const balances = results.results.tokenBalances.callsReturnContext.map(
    (entry) => parseInt(entry.returnValues[0].hex, 16) / USDC_SCALE,
  )
  return balances
}

export default getAvailableRewards
