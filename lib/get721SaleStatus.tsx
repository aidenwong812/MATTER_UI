import { Contract } from "ethers"
import abi from "./abi/abi-ERC721Drop.json"
import getDefaultProvider from "./getDefaultProvider"
import { CHAIN_ID } from "./consts"

const get721SaleStatus = async (dropAddress) => {
  try {
    const drop = new Contract(dropAddress, abi, getDefaultProvider(CHAIN_ID))
    const details = await drop.saleDetails()

    return {
      publicSaleActive: details.publicSaleActive,
      publicSalePrice: details.publicSalePrice.toString(),
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err)
    return null
  }
}

export default get721SaleStatus
