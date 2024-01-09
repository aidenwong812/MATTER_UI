import { Contract } from "ethers"
import abi from "./abi/abi-ERC1155Sale.json"
import getDefaultProvider from "./getDefaultProvider"
import { get1155Minters } from "./zora/get1155Minters"
import { CHAIN_ID } from "./consts"

const get1155SaleStatus = async (dropAddress, tokenId) => {
  try {
    const response = await get1155Minters(dropAddress, tokenId, CHAIN_ID)

    if (response.length < 1) return null

    const minter = new Contract(response[0], abi, getDefaultProvider(CHAIN_ID))
    const salesConfig = await minter.sale(dropAddress, tokenId)
    const { saleStart, saleEnd, pricePerToken } = salesConfig

    return {
      publicSalePrice: pricePerToken.toString(),
      publicSaleActive: saleStart > 0 && saleEnd > 0,
      minterAddress: response[0],
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("1155 ERROR", err)

    return null
  }
}

export default get1155SaleStatus
