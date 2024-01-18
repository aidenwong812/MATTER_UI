import { formatEther } from "viem"
import { ethers } from "ethers"
import { CrossmintPaymentElement } from "@crossmint/client-sdk-react-ui"
import Image from "../../shared/Image"
import DeliveryInformation from "./DeliveryInfomation"
import { useCheckOut } from "../../providers/CheckOutProvider"
import useEthPrice from "../../hooks/useEthPrice"
import useConnectedWallet from "../../hooks/useConnectedWallet"
import getMulticallFromCart from "../../lib/getMulticallFromCart"
import getMintData from "../../lib/zora/getMintData"

const InformationSelect = () => {
  const { getUsdConversion } = useEthPrice()

  const { connectedWallet } = useConnectedWallet()
  const { cart, totalPrice } = useCheckOut()
  const totalPriceEth = ethers.utils.formatEther(totalPrice)
  const multicalls = getMulticallFromCart(cart, getMintData(connectedWallet))
  const usdPrice = getUsdConversion(formatEther(totalPrice.toBigInt()))

  const mintConfig = {
    type: "erc-721",
    totalPrice: totalPriceEth,
    quantity: 1,
    cart: multicalls,
    to: connectedWallet,
  }

  return (
    <div className="bg-white w-full py-[40px] flex flex-col items-center">
      <Image
        link="/images/matter.svg"
        blurLink="/images/matter.svg"
        containerClasses="w-[111px] aspect-[111/26]"
        alt="not found icon"
      />
      <p className="mt-[30px]">Secure checkout powered by</p>
      <Image
        link="/images/stripe.svg"
        blurLink="/images/stripe.png"
        containerClasses="w-[63px] aspect-[63/30]"
        alt="not found icon"
      />
      <div className="flex justify-between items-center w-full p-[24px]">
        <p
          className="text-black font-[400] text-[16px] leading-[100%]
                    tracking-[-0.4px]"
        >
          Order Subtotal
        </p>
        <p
          className="text-black font-[400] text-[16px] leading-[100%]
                    tracking-[-0.4px]"
        >
          ${usdPrice}
        </p>
      </div>
      <DeliveryInformation />
      <p
        className="pb-[16px] w-full text-left px-[24px]
                    font-[400] leading-[100%] tracking-[-0.4px] mt-[16px]"
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

export default InformationSelect
