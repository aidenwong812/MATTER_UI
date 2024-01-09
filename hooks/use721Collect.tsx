import abi from "../lib/abi/abi-ERC721Drop.json"
import { CHAIN_ID } from "../lib/consts"
import usePrivySendTransaction from "./usePrivySendTransaction"

const use721Collect = () => {
  const { sendTransaction } = usePrivySendTransaction()
  const collect721 = async (comment = "", dropAddress, owner, referral, totalFee) => {
    await sendTransaction(
      dropAddress,
      CHAIN_ID,
      abi,
      "mintWithRewards",
      [owner, 1, comment || "OASIS", referral],
      totalFee,
      "Securely Pay on Oasis",
      "Pay with Crypto",
      "Purchase",
      "Purchased!",
    )
  }

  return { collect721 }
}

export default use721Collect
