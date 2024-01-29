import Image from "../../shared/Image"
import DeliveryAddressForm from "./DeliveryAddressForm"

const DeliveryAddress = () => (
  <div className="bg-white w-full flex flex-col items-center py-[16px]">
    <p
      className="pb-[16px] border-b border-b-gray_3 w-full text-center
              font-[400] leading-[100%] tracking-[-0.4px]"
    >
      Delivery Address
    </p>
    <DeliveryAddressForm />
    <p className="text-gray_8 text-[12] font-[400] leading-[100%] tracking-[-0.3px]">powered by</p>
    <Image
      alt="not found icon"
      link="/images/stripe.svg"
      blurLink="/images/stripe.png"
      containerClasses="w-[53px] aspect-[53/25]"
    />
  </div>
)

export default DeliveryAddress
