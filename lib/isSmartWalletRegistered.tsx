import { CHAIN_ID } from "./consts"
import getDefaultProvider from "./getDefaultProvider"

const isSmartWalletRegistered = async (smartWalletAddress) => {
  const provider = getDefaultProvider(CHAIN_ID)
  const code = await provider.getCode(smartWalletAddress)
  const hasTokenboundAccount = code !== "0x"
  return hasTokenboundAccount
}

export default isSmartWalletRegistered
