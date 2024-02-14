import { CHAIN_ID } from "@/lib/consts"
import usePrivySendTransaction from "./usePrivySendTransaction"
import abi from "@/lib/abi/ERC20FixedPriceSaleStrategy.json"
import { getEncodedMinterArgs } from "onchain-magic"
import useConnectedWallet from "./useConnectedWallet"

const useErc20FixedPriceSaleStrategy = () => {
  const { sendTransaction } = usePrivySendTransaction()
  const { connectedWallet } = useConnectedWallet()

  const requestMintBatchByPrivy = async () => {
    console.log("SWEETS requestMintBatchByPrivy")
    const to = process.env.NEXT_PUBLIC_FIXED_PRICE_SALE_STRATEGY
    const targets = ["0x97c55b1Ca948414D3287D8E6D1e3057Ff9A8F05F"]
    const ids = [1]
    const quantities = [1]
    const unusedKey = 0
    const minterArguments = [getEncodedMinterArgs(connectedWallet, "purchased via MATTER")]
    const args = [targets, ids, quantities, unusedKey, minterArguments]
    console.log("SWEETS ARGS", args)
    try {
      const response = await sendTransaction(
        to,
        CHAIN_ID,
        abi,
        "requestMintBatch",
        args,
        "0",
        "Buy with USDC",
        "Sign",
      )
      return response
    } catch (error) {
      console.error(error)
      return { error }
    }
  }

  return { requestMintBatchByPrivy }
}

export default useErc20FixedPriceSaleStrategy
