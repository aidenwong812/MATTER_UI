import { formatEther } from "viem"
import Image from "../../../shared/Image"
import CrossmintButton from "../../CrossmintButton"
import Icon from "../../../shared/Icon"
import useIsMobile from "../../../hooks/useIsMobile"
import { useCheckOut } from "../../../providers/CheckOutProvider"
import useEthPrice from "../../../hooks/useEthPrice"

const CheckOutCard = () => {
  const isMobile = useIsMobile()
  const { getUsdConversion } = useEthPrice()
  const { cart, purchaseByPrivy, totalPrice } = useCheckOut()
  const usdPrice = getUsdConversion(formatEther(totalPrice.toBigInt()))

  const handleCryptoPurchase = async () => {
    await purchaseByPrivy(cart, totalPrice)
  }

  return (
    <div className="md:col-span-6 xl:col-span-4">
      <div
        className="border-0 md:border md:border-gray_3 rounded-[20px]
            px-[24px] py-[32px]"
      >
        {isMobile && (
          <div className="flex justify-center pb-[24px]">
            <Icon name="cart" className="text-gray_5" size={30} />
          </div>
        )}
        <p
          className="text-[16px] leading-[100%] tracking-[-0.4px] font-[400] pb-[8px]
        text-center md:text-left"
        >
          Cart Total
        </p>
        <p
          className="text-[28px] leading-[120%] tracking-[-0.168px] font-[400] font-bold mb-[20px]
        text-center md:text-left"
        >
          ${usdPrice}
        </p>
        <div className="flex flex-col items-center">
          <button
            type="button"
            className="w-[327px] h-[56px] bg-black rounded-full
              flex gap-x-[10px] items-center justify-center"
            onClick={handleCryptoPurchase}
          >
            <Image
              link="/images/privy_pay.svg"
              blurLink="/images/privy_pay.png"
              containerClasses="w-[18px] h-[14px]"
              alt="not found icon"
            />
            <p className="text-white text-[16px] font-[400] leading-[120%]">Pay with Crypto</p>
          </button>{" "}
          <p
            className="text-black text-[16px] font-[400] leading-[150%] tracking-[-0.684px]
            text-center my-[20px]"
          >
            Or
          </p>
          <CrossmintButton />
        </div>
      </div>
    </div>
  )
}

export default CheckOutCard
