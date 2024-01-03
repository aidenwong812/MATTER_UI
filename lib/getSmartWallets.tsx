import { ContractCallResults } from "ethereum-multicall"
import {
  CHAIN_ID,
  DROP_ADDRESS,
  ERC6551_IMPLEMENTATION_ADDRESS,
  ERC6551_REGISTRY_ADDRESS,
  ERC6551_SALT,
} from "./consts"
import getMulticall from "./getMulticall"
import registryAbi from "./abi/erc6551-registry.json"

const getSmartWallets = async (tokenIdArray) => {
  const registryCalls = []
  for (let i = 0; i < tokenIdArray.length; i += 1) {
    registryCalls.push({
      reference: `account-${i}`,
      methodName: "account",
      methodParameters: [
        ERC6551_IMPLEMENTATION_ADDRESS,
        CHAIN_ID,
        DROP_ADDRESS,
        tokenIdArray[i],
        ERC6551_SALT,
      ],
    })
  }

  const results: ContractCallResults = await getMulticall(
    "smartWallets",
    ERC6551_REGISTRY_ADDRESS,
    registryAbi,
    registryCalls,
  )
  const addresses = results.results.smartWallets.callsReturnContext.map(
    (entry) => entry.returnValues[0],
  )
  return addresses
}

export default getSmartWallets
