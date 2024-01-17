import abi from "../lib/abi/abi-ERC721Drop.json"
import { CHAIN_ID } from "../lib/consts"
import usePrivySendTransaction from "./usePrivySendTransaction"

const use721Collect = () => {
  const { sendTransaction } = usePrivySendTransaction()
  const collect721 = async (comment = "", dropAddress, owner, quantity, referral, totalFee) => {
    await sendTransaction(
      dropAddress,
      CHAIN_ID,
      abi,
      "mintWithRewards",
      [owner, quantity, comment || "Matter", referral],
      totalFee,
      "Securely Pay on Matter",
      "Pay with Crypto",
      "Purchase",
    )
  }

  return { collect721 }
}

export default use721Collect
