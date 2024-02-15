import { CHAIN_ID, MINTER_ADDRESS } from "@/lib/consts"
import abi from "@/lib/abi/ERC20FixedPriceSaleStrategy.json"
import { getEncodedMinterArgs } from "onchain-magic"
import { BigNumber } from "ethers"
import useConnectedWallet from "@/hooks/useConnectedWallet"
import usePrivySendTransaction from "@/hooks/usePrivySendTransaction"
import { IS_TESTNET } from "@/lib/consts"

const useErc20FixedPriceSaleStrategy = () => {
  const { sendTransaction } = usePrivySendTransaction()
  const { connectedWallet } = useConnectedWallet()

  const requestMintBatchByPrivy = async () => {
    if (!connectedWallet) return { error: "please connect wallet" }
    const to = MINTER_ADDRESS
    const targets = [
      IS_TESTNET
        ? "0xC6DF65460CeD63c5505B5935eDE7D2c955e4CB6b"
        : "0xd0b7956771475f1f40901d2b6dbce507a629cc21",
    ]
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
