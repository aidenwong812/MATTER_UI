import { Interface } from "ethers/lib/utils"
import { getCallSaleData } from "onchain-magic"
import dropAbi from "../abi/abi-ERC1155Drop.json"

const getSetupActions = (adminWallet, ipfsCid) => {
  //   TODO: dummy variables need replaced before mainnet launch
  const dummyUsdcAddress = "0xAdc2baF32FC975A4Fcd0A4AE69F7040022392102"
  const dummyNextTokenId = 1
  const dummySaleStart = 0
  const dummyPricePerToken = 100

  const adminPermissionArgs = [0, adminWallet, 2]
  const minterPermissionArgs = [0, process.env.NEXT_PUBLIC_FIXED_PRICE_SALE_STRATEGY, 2]
  const minterPermissionArgs2 = [
    dummyNextTokenId,
    process.env.NEXT_PUBLIC_FIXED_PRICE_SALE_STRATEGY,
    2,
  ]
  const iface = new Interface(dropAbi)
  const minterPermissionCall = iface.encodeFunctionData("addPermission", minterPermissionArgs)
  const minterPermissionCall2 = iface.encodeFunctionData("addPermission", minterPermissionArgs2)
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
  const maxSupply = 1000000
  const setupNewTokenArgs = [`ipfs://${ipfsCid}`, maxSupply]
  const setupNewTokenCall = iface.encodeFunctionData("setupNewToken", setupNewTokenArgs)
  const callSaleCall = iface.encodeFunctionData("callSale", callSaleArgs)
  const setupActions = [
    adminPermissionCall,
    minterPermissionCall,
    minterPermissionCall2,
    setupNewTokenCall,
    callSaleCall,
  ]
  return setupActions
}

export default getSetupActions
