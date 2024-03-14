import { Interface } from "ethers/lib/utils"
import { getCallSaleData } from "onchain-magic"
import dropAbi from "../abi/abi-ERC1155Drop.json"
import { MINTER_ADDRESS, USDC_ADDRESS } from "../consts"

const getSetupActions = (adminWallet, ipfsCid, pricePerToken, totalSupply) => {
  const dummyNextTokenId = 1
  const dummySaleStart = 0

  const adminPermissionArgs = [0, adminWallet, 2]
  const minterPermissionArgs = [0, MINTER_ADDRESS, 2]
  const minterPermissionArgs2 = [dummyNextTokenId, MINTER_ADDRESS, 2]
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
    pricePerToken,
    fundsRecipient: adminWallet,
    erc20Address: USDC_ADDRESS,
  })
  const callSaleArgs = [dummyNextTokenId, MINTER_ADDRESS, data]
  const setupNewTokenArgs = [`ipfs://${ipfsCid}`, totalSupply]
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
