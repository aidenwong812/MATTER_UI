import { CrossmintPaymentElement } from "@crossmint/client-sdk-react-ui"
import { ethers } from "ethers"
import { useCheckOut } from "../../providers/CheckOutProvider"
import getMulticallFromCart from "../../lib/getMulticallFromCart"
import getMintData from "../../lib/zora/getMintData"
import useConnectedWallet from "../../hooks/useConnectedWallet"

const CreditCardDetail = () => {
  const { connectedWallet } = useConnectedWallet()
  const { cart, totalPrice } = useCheckOut()
  const totalPriceEth = ethers.utils.formatEther(totalPrice)
  const multicalls = getMulticallFromCart(cart, getMintData(connectedWallet))

  const mintConfig = {
    type: "erc-721",
    totalPrice: totalPriceEth,
    quantity: 1,
    cart: multicalls,
    to: connectedWallet,
  }

  return (
    <div
      className="bg-white w-full py-[16px]
        flex flex-col items-center"
    >
      <p
        className="pb-[16px] border-b border-b-gray_3 w-full text-center
                    font-[400] leading-[100%] tracking-[-0.4px] my-[16px]"
      >
        Card Details
      </p>
      <CrossmintPaymentElement
        mintConfig={mintConfig}
        projectId={process.env.NEXT_PUBLIC_CROSSMINT_PROJECT_ID}
        collectionId={process.env.NEXT_PUBLIC_CROSSMINT_COLLECTION_ID}
        environment="staging"
        paymentMethod="fiat"
      />
    </div>
  )
}

export default CreditCardDetail
