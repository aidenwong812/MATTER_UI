import { useState } from "react"
import Image from "../../shared/Image"
import CheckOutModal from "../CheckOutModal"
import DeliveryFormProvider from "../../providers/DeliveryFormProvider"

const CreditCardPayButton = ({ cart, totalPrice, buttonLabel = "Pay with Credit or Debit" }) => {
  const [isOpenCreditCardModal, setIsOpenCreditCardModal] = useState(false)

  return (
    <>
      <button
        type="button"
        className="border border-gray_3
                w-[327px] aspect-[327/56] rounded-full
                flex justify-center items-center
                gap-x-[10px]"
        onClick={() => setIsOpenCreditCardModal(true)}
      >
        <Image
          link="/images/credit_pay.svg"
          blurLink="/images/credit_pay.png"
          containerClasses="w-[24px] aspect-[1/1]"
          alt="not found icon"
        />
        {buttonLabel}
      </button>
      <DeliveryFormProvider>
        <CheckOutModal
          isVisible={isOpenCreditCardModal}
          handleClose={() => setIsOpenCreditCardModal(false)}
          cart={cart}
          totalPrice={totalPrice}
        />
      </DeliveryFormProvider>
    </>
  )
}

export default CreditCardPayButton
