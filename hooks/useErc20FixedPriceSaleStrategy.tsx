import { CHAIN_ID } from "@/lib/consts"
import abi from "@/lib/abi/ERC20FixedPriceSaleStrategy.json"
import { getEncodedMinterArgs } from "onchain-magic"
import { BigNumber } from "ethers"
import useConnectedWallet from "./useConnectedWallet"
import usePrivySendTransaction from "./usePrivySendTransaction"

const useErc20FixedPriceSaleStrategy = () => {
  const { sendTransaction } = usePrivySendTransaction()
  const { connectedWallet } = useConnectedWallet()

  const requestMintBatchByPrivy = async () => {
    const to = process.env.NEXT_PUBLIC_FIXED_PRICE_SALE_STRATEGY
    const targets = ["0xC6DF65460CeD63c5505B5935eDE7D2c955e4CB6b"]
    const ids = [1]
    const quantities = [1]
    const unusedKey = 0
    const minterArguments = [getEncodedMinterArgs(connectedWallet, "purchased via MATTER")]
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
