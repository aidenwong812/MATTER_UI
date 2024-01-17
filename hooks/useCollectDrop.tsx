import { toast } from "react-toastify"
import { BigNumber } from "ethers"
import usePreparePrivyWallet from "./usePreparePrivyWallet"
import { zoraFee } from "../lib/consts"
import useConnectedWallet from "./useConnectedWallet"
import { useCallback } from "react"
import handleTxError from "../lib/handleTxError"
import { useRouter } from "next/router"
import get1155SaleStatus from "../lib/get1155SaleStatus"
import use1155Collect from "./use1155Collect"

const useCollectDrop = (dropAddress, tokenId) => {
  const { prepare } = usePreparePrivyWallet()
  const { connectedWallet } = useConnectedWallet()
  const createReferral = process.env.NEXT_PUBLIC_CREATE_REFERRAL
  const { collect1155 } = use1155Collect()
  const router = useRouter()

  const collectDrop = useCallback(
    async (comment = "", quantity) => {
      try {
        if (!dropAddress) return
        const saleStatus: any = await get1155SaleStatus(dropAddress, tokenId)
        const totalFee = BigNumber.from(saleStatus?.publicSalePrice).add(zoraFee).toHexString()
        const owner = connectedWallet
        const totalFeeAsNumber = parseFloat(totalFee)
        const hasBalanceToPurchase = totalFeeAsNumber !== parseFloat("1.0")

        if (!prepare()) return
        if (!hasBalanceToPurchase) {
          toast.error("insufficient funds. please refill your wallet.")
          return
        }

        if (!saleStatus?.minterAddress) return

        await collect1155(
          comment,
          dropAddress,
          tokenId,
          owner,
          saleStatus?.minterAddress,
          createReferral,
          totalFee,
        )

        router.push("/checkout/success")
      } catch (err) {
        handleTxError(err)
      }
    },
    [dropAddress],
  )

  return { collectDrop }
}

export default useCollectDrop
