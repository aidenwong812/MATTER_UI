import { BigNumber } from "ethers"

const getMulticallFromCart = (cart, mintData) =>
  cart.map((data) => ({
    target: data.product.contractAddress,
    allowFailure: false, // Set to true if you want to allow this call to fail without reverting the entire transaction
    value: BigNumber.from(data.ethPrice),
    callData: mintData,
  }))

export default getMulticallFromCart
