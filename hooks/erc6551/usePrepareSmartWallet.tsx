import { Contract } from "ethers"
import { CHAIN_ID } from "../../lib/consts"
import isSmartWalletRegistered from "../../lib/isSmartWalletRegistered"
import useCreateTBA from "./useCreateTBA"
import { useEthersSigner } from "../useEthersSigner"
import abi from "../../lib/abi/erc6551-account.json"
import getImplementationAddress from "../../lib/getImplementationAddress"
import handleTxError from "../../lib/handleTxError"

const usePrepareSmartWallet = () => {
  const signer = useEthersSigner()
  const { createTba } = useCreateTBA()

  const prepare = async (tokenBoundAccount, tokenId) => {
    const registered = await isSmartWalletRegistered(tokenBoundAccount)
    if (!registered) {
      const response = await createTba(CHAIN_ID, process.env.NEXT_PUBLIC_DROP_CONTRACT, tokenId)
      if (!response) return false
    }
    const contract = new Contract(tokenBoundAccount, abi, signer)
    const implementation = await getImplementationAddress(tokenBoundAccount)

    let tx
    if (!implementation) {
      try {
        tx = await contract.initialize()
        await tx.wait()
      } catch (err) {
        handleTxError(err)
        return false
      }
    }
    return true
  }

  return {
    prepare,
  }
}

export default usePrepareSmartWallet
