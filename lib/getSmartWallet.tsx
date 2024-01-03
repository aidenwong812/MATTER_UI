import { Contract } from "ethers"
import abi from "./abi/erc6551-registry.json"
import getDefaultProvider from "./getDefaultProvider"
import {
  CHAIN_ID,
  ERC6551_IMPLEMENTATION_ADDRESS,
  ERC6551_REGISTRY_ADDRESS,
  ERC6551_SALT,
} from "./consts"

const getSmartWallet = async (tokenId) => {
  const registryContract = new Contract(ERC6551_REGISTRY_ADDRESS, abi, getDefaultProvider(CHAIN_ID))
  const tokenBoundAccount = await registryContract.account(
    ERC6551_IMPLEMENTATION_ADDRESS,
    CHAIN_ID,
    process.env.NEXT_PUBLIC_DROP_CONTRACT,
    tokenId,
    ERC6551_SALT,
  )

  return tokenBoundAccount
}

export default getSmartWallet
