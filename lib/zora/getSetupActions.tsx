import { Interface } from "ethers/lib/utils"
import { getCallSaleData } from "onchain-magic"
import dropAbi from "../abi/abi-ERC1155Drop.json"

const getSetupActions = (adminWallet, ipfsCid) => {
  const adminPermissionArgs = [0, adminWallet, 2]
  const minterPermissionArgs = [0, process.env.NEXT_PUBLIC_FIXED_PRICE_SALE_STRATEGY, 4]
  const iface = new Interface(dropAbi)

  const minterPermissionCall = iface.encodeFunctionData("addPermission", minterPermissionArgs)
  const adminPermissionCall = iface.encodeFunctionData("addPermission", adminPermissionArgs)
  const usdcAddress = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913"
  const nextTokenId = 1
  const data = getCallSaleData({
    tokenId: nextTokenId,
    saleStart: 0,
    saleEnd: "18446744073709551615",
    maxTokensPerAddress: 0,
    pricePerToken: 100,
    fundsRecipient: adminWallet,
    erc20Address: usdcAddress,
  })
  const callSaleArgs = [nextTokenId, process.env.NEXT_PUBLIC_FIXED_PRICE_SALE_STRATEGY, data]
  const setupNewTokenArgs = [`ipfs://${ipfsCid}`, 0]
  const setupNewTokenCall = iface.encodeFunctionData("setupNewToken", setupNewTokenArgs)
  const callSaleCall = iface.encodeFunctionData("callSale", callSaleArgs)
  const setupActions = [adminPermissionCall, minterPermissionCall, setupNewTokenCall, callSaleCall]
  return setupActions
}

export default getSetupActions
