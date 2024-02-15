import { Interface } from "ethers/lib/utils"
import { getCallSaleData } from "onchain-magic"
import dropAbi from "../abi/abi-ERC1155Drop.json"

const getSetupActions = (adminWallet, ipfsCid) => {
  //   TODO: dummy variables need replaced before mainnet launch
  const dummyUsdcAddress = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913"
  const dummyNextTokenId = 1
  const dummySaleStart = 0
  const dummyPricePerToken = 100

  const adminPermissionArgs = [0, adminWallet, 2]
  const minterPermissionArgs = [0, process.env.NEXT_PUBLIC_FIXED_PRICE_SALE_STRATEGY, 4]
  const iface = new Interface(dropAbi)
  const minterPermissionCall = iface.encodeFunctionData("addPermission", minterPermissionArgs)
  const adminPermissionCall = iface.encodeFunctionData("addPermission", adminPermissionArgs)
  const openEdition = 0
  const maxUint64 = "18446744073709551615"
  const data = getCallSaleData({
    tokenId: dummyNextTokenId,
    saleStart: dummySaleStart,
    saleEnd: maxUint64,
    maxTokensPerAddress: openEdition,
    pricePerToken: dummyPricePerToken,
    fundsRecipient: adminWallet,
    erc20Address: dummyUsdcAddress,
  })
  const callSaleArgs = [dummyNextTokenId, process.env.NEXT_PUBLIC_FIXED_PRICE_SALE_STRATEGY, data]
  const setupNewTokenArgs = [`ipfs://${ipfsCid}`, 0]
  const setupNewTokenCall = iface.encodeFunctionData("setupNewToken", setupNewTokenArgs)
  const callSaleCall = iface.encodeFunctionData("callSale", callSaleArgs)
  const setupActions = [adminPermissionCall, minterPermissionCall, setupNewTokenCall, callSaleCall]
  return setupActions
}

export default getSetupActions
