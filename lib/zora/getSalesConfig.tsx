import { BigNumber } from "ethers"
import { Interface } from "ethers/lib/utils"

const getSalesConfig = (tokenId, fundsRecipient) => {
  const maxUint64 = "18446744073709551615"

  const salesConfigABI = [
    {
      inputs: [
        { name: "tokenId", type: "uint256" },
        {
          components: [
            { name: "saleStart", type: "uint64" },
            { name: "saleEnd", type: "uint64" },
            { name: "maxTokensPerAddress", type: "uint64" },
            { name: "pricePerToken", type: "uint96" },
            { name: "fundsRecipient", type: "address" },
          ],
          name: "salesConfig",
          type: "tuple",
        },
      ],
      stateMutability: "nonpayable",
      name: "setSale",
      type: "function",
    },
  ]

  const salesConfigData = {
    saleStart: BigNumber.from("0"), // replace with your value
    saleEnd: BigNumber.from(maxUint64), // replace with your value
    maxTokensPerAddress: BigNumber.from(maxUint64), // replace with your value
    pricePerToken: "0", // replace with your value in ether
    fundsRecipient, // replace with your value
  }

  const salesConfigInterface = new Interface(salesConfigABI)

  return salesConfigInterface.encodeFunctionData("setSale", [tokenId, salesConfigData])
}

export default getSalesConfig
