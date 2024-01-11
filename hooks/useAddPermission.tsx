import { Contract } from "ethers"
import abi from "../lib/abi/abi-ERC1155Drop.json"
import handleTxError from "../lib/handleTxError"
import { useEthersSigner } from "./useEthersSigner"
import { Interface } from "ethers/lib/utils"

const useAddPermission = () => {
  const signer = useEthersSigner()

  const addPermission = async (dropAddress = "", user, hasAdminRole, hasMinterRole) => {
    try {
      const contract = new Contract(dropAddress, abi, signer)

      const calls = []
      const adminPermissionData = new Interface(abi).encodeFunctionData("addPermission", [
        0,
        user,
        2,
      ])
      const salesMinterPermissionData = new Interface(abi).encodeFunctionData("addPermission", [
        0,
        process.env.NEXT_PUBLIC_FIXED_PRICE_SALE_STRATEGY,
        4,
      ])

      if (!hasAdminRole) calls.push(adminPermissionData)
      if (!hasMinterRole) calls.push(salesMinterPermissionData)

      if (calls.length) {
        const tx = await contract.multicall(calls)
        await tx.wait()
      }

      return { error: false }
    } catch (err) {
      handleTxError(err)
      return { error: err }
    }
  }

  return {
    addPermission,
  }
}

export default useAddPermission
