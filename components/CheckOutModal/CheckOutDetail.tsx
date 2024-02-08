import { formatEther } from "viem"
import { useEthPrice } from "@/providers/EthPriceProvider"
import Image from "../../shared/Image"
import DeliveryInformation from "./DeliveryInfomation"

const CheckOutDetail = ({ totalPrice }) => {
  const { getUsdConversion } = useEthPrice()
  const usdPrice = totalPrice && getUsdConversion(formatEther(totalPrice.toBigInt()))

  return (
    <>
      <Image
        link="/images/matter.svg"
        blurLink="/images/matter.svg"
        containerClasses="w-[111px] aspect-[111/26]"
        alt="not found icon"
      />
      <div className="flex items-center mt-[30px]">
        <p className="text-[12px]">Secure checkout powered by</p>
        <Image
          link="/images/stripe.svg"
          blurLink="/images/stripe.png"
          containerClasses="w-[53px] aspect-[53/25]"
          alt="not found icon"
        />
      </div>
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
    </>
  )
}

export default CheckOutDetail
