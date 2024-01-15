import { formatEther } from "viem"
import Image from "../../shared/Image"
import CreditCardInformation from "./CreditCardInformation"
import DeliveryInformation from "./DeliveryInfomation"
import { useCheckOut } from "../../providers/CheckOutProvider"
import useEthPrice from "../../hooks/useEthPrice"

const InformationSelect = () => {
  const { getUsdConversion } = useEthPrice()
  const { totalPrice } = useCheckOut()
  const usdPrice = getUsdConversion(formatEther(totalPrice.toBigInt()))

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
      <DeliveryInformation />
      <CreditCardInformation />
      <div
        className="flex justify-between items-center w-full
                p-[24px] border-b border-b-gray_3"
      >
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
      <p className="text-[12px] text-gray_6 py-[24px]  mb-[32px]">
        {`By tapping "Submit Payment", I agree to the Temrs of Sale.`}
      </p>
      <button
        type="button"
        className="border-none bg-gray_1 px-[51px] py-[16px] rounded-full
                    font-[400] leading-[120%] text-[16px] w-[327px] text-gray_6"
      >
        Submit Payment
      </button>
    </div>
  )
}

export default InformationSelect
