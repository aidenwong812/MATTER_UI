import { MODAL_SCREEN } from "../../hooks/useCreditCardModal"
import { useCheckOut } from "../../providers/CheckOutProvider"
import Image from "../../shared/Image"
import DeliveryAddressForm from "./DeliveryAddressForm"

const DeliveryAddress = () => {
  const { setModalScreen } = useCheckOut()

  return (
    <div className="bg-white w-full flex flex-col items-center py-[16px]">
      <p
        className="pb-[16px] border-b border-b-gray_3 w-full text-center
              font-[400] leading-[100%] tracking-[-0.4px]"
      >
        Delivery Address
      </p>
      <div
        className="w-full flex flex-col gap-y-[10px] items-center
              justify-center my-[16px] px-[20px]"
      >
        <DeliveryAddressForm />
      </div>
      <button
        type="button"
        className="w-[327px] h-[56px] bg-black rounded-full
                  flex gap-x-[10px] items-center justify-center mb-[16px]"
        onClick={() => setModalScreen(MODAL_SCREEN.INFORMATION_SELECT)}
      >
        <p className="text-white text-[16px] font-[400] leading-[120%]">Confirm Delivery Address</p>
      </button>
      <p className="text-gray_8 text-[12] font-[400] leading-[100%] tracking-[-0.3px]">
        powered by
      </p>
      <Image
        alt="not found icon"
        link="/images/stripe.svg"
        blurLink="/images/stripe.png"
        containerClasses="w-[63px] aspect-[63/30]"
      />
    </div>
  )
}

export default DeliveryAddress
