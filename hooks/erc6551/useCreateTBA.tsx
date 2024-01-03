import { useMemo } from "react"
import { Contract } from "ethers"
import abi from "../../lib/abi/erc6551-registry.json"
import { useEthersSigner } from "../useEthersSigner"
import {
  ERC6551_IMPLEMENTATION_ADDRESS,
  ERC6551_INIT_DATA,
  ERC6551_REGISTRY_ADDRESS,
} from "../../lib/consts"
import handleTxError from "../../lib/handleTxError"

const useCreateTBA = () => {
  const signer = useEthersSigner()
  const registryContract = useMemo(
    () => new Contract(ERC6551_REGISTRY_ADDRESS, abi, signer),
    [signer],
  )

  const createTba = async (chainId, contractAddress, tokenId) => {
    try {
      const SALT = 0
      const tx = await registryContract.createAccount(
        ERC6551_IMPLEMENTATION_ADDRESS,
        chainId,
        contractAddress,
        tokenId,
        SALT,
        ERC6551_INIT_DATA,
        {
          gasLimit: 200_000,
        },
      )
      await tx.wait()
      return true
    } catch (err) {
      handleTxError(err)
      return false
    }
  }

  return {
    createTba,
  }
}

export default useCreateTBA
