import { defaultAbiCoder } from "ethers/lib/utils"
import abi from "../lib/abi/abi-ERC1155Drop.json"
import { CHAIN_ID } from "../lib/consts"
import usePrivySendTransaction from "./usePrivySendTransaction"

const use1155Collect = () => {
  const { sendTransaction } = usePrivySendTransaction()

  const collect1155 = async (
    comment = "",
    dropAddress,
    tokenId,
    owner,
    minterAddress,
    referral,
    totalFee,
  ) => {
    const minterArguments = defaultAbiCoder.encode(
      ["address", "string"],
      [owner, comment || "🪄🪄🪄"],
    )

    await sendTransaction(
      dropAddress,
      CHAIN_ID,
      abi,
      "mintWithRewards",
      [minterAddress, tokenId, 1, minterArguments, referral],
      totalFee,
      "1 EDITION",
      comment ? "Comment" : "Collect",
      comment ? "Commented!" : "Collected!",
    )
  }

  return { collect1155 }
}

export default use1155Collect
