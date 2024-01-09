import { toast } from "react-toastify"
import { BigNumber } from "ethers"
import usePreparePrivyWallet from "./usePreparePrivyWallet"
import useBalance from "./useBalance"
import { zoraFee } from "../lib/consts"
import useConnectedWallet from "./useConnectedWallet"
import use721Collect from "./use721Collect"
import get721SaleStatus from "../lib/get721SaleStatus"
import { useCallback } from "react"
import handleTxError from "../lib/handleTxError"

const useCollectDrop = (dropAddress) => {
  const { prepare } = usePreparePrivyWallet()
  const { balance } = useBalance()
  const { connectedWallet } = useConnectedWallet()
  const createReferral = process.env.NEXT_PUBLIC_CREATE_REFERRAL
  const { collect721 } = use721Collect()

  const collectDrop = useCallback(
    async (comment = "", quantity) => {
      try {
        if (!dropAddress) return
        const saleStatus: any = await get721SaleStatus(dropAddress)
        const totalFee = BigNumber.from(saleStatus?.publicSalePrice)
          .mul(quantity)
          .add(zoraFee)
          .toHexString()
        const owner = connectedWallet
        const totalFeeAsNumber = parseFloat(totalFee)
        const hasBalanceToPurchase = totalFeeAsNumber !== parseFloat(balance)

        if (!prepare()) return
        if (!hasBalanceToPurchase) {
          toast.error("insufficient funds. please refill your wallet.")
          return
        }

        await collect721(comment, dropAddress, owner, quantity, createReferral, totalFee)
      } catch (err) {
        handleTxError(err)
      }
    },
    [dropAddress],
  )

  return { collectDrop }
}

export default useCollectDrop
