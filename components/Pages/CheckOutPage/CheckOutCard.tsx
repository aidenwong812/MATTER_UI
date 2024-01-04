import { useAccount } from "wagmi"
import Image from "../../../shared/Image"
import CrossmintButton from "../../Buttons/CrossmintButton"

const CheckOutCard = () => {
  const { address } = useAccount()

  return (
    <div className="col-span-4">
      <div
        className="border border-gray_3 rounded-[20px]
            px-[24px] py-[32px]"
      >
        <p className="text-[16px] leading-[100%] tracking-[-0.4px] font-[400] pb-[8px]">
          Cart Total
        </p>
        <p className="text-[28px] leading-[120%] tracking-[-0.168px] font-[400] font-bold mb-[20px]">
          $000.00
        </p>
        <div className="flex flex-col items-center">
          <button
            type="button"
            className="w-[327px] h-[56px] bg-black rounded-full
                        flex gap-x-[10px] items-center justify-center"
          >
            <Image
              link="/images/privy_pay.png"
              blurLink="/images/privy_pay.png"
              containerClasses="w-[18px] h-[14px]"
              alt="not found icon"
            />
            <p className="text-white text-[16px] font-[400] leading-[120%]">Pay with Crypto</p>
          </button>
          <p
            className="text-black text-[16px] font-[400] leading-[150%] tracking-[-0.684px]
            text-center my-[20px]"
          >
            Or
          </p>
          <CrossmintButton wallet={address} price={3000} quantity={1} />
        </div>
      </div>
    </div>
  )
}

export default CheckOutCard
