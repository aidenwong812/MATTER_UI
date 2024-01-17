import { useState } from "react"
import Image from "../../shared/Image"
import CreditCardModal from "../CreditCardModal"

const CreditCardPayButton = () => {
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
        Pay with Credit or Debit
      </button>
      <CreditCardModal
        isVisible={isOpenCreditCardModal}
        handleClose={() => setIsOpenCreditCardModal(false)}
      />
    </>
  )
}

export default CreditCardPayButton
