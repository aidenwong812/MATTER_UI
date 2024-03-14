import { BigNumber } from "ethers"
import { CHAIN_ID, MINTER_ADDRESS } from "@/lib/consts"
import abi from "@/lib/abi/ERC20FixedPriceSaleStrategy.json"
import usePrivySendTransaction from "@/hooks/usePrivySendTransaction"

const useErc20FixedPriceSaleStrategy = () => {
  const { sendTransaction } = usePrivySendTransaction()

  const requestMintBatchByPrivy = async (targets, ids, quantities, minterArguments) => {
    if (!targets.length || !quantities.length || !ids.length || !minterArguments.length)
      return { error: "must have at least one item in cart to purchase" }

    const to = MINTER_ADDRESS
    const unusedKey = 0
    const args = [targets, ids, quantities, unusedKey, minterArguments]
    try {
      const response = await sendTransaction(
        to,
        CHAIN_ID,
        abi,
        "requestMintBatch",
        args,
        BigNumber.from("0").toHexString(),
        "Buy with USDC",
        "Sign",
      )
      return response
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
      return { error }
    }
  }

  return { requestMintBatchByPrivy }
}

export default useErc20FixedPriceSaleStrategy
