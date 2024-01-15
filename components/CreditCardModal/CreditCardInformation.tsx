import { MODAL_SCREEN } from "../../hooks/useCreditCardModal"
import { useCheckOut } from "../../providers/CheckOutProvider"
import Image from "../../shared/Image"

const CreditCardInformation = () => {
  const { setModalScreen } = useCheckOut()

  return (
    <div
      className="flex justify-between items-center w-full
                    p-[24px] border-b border-b-gray_3"
    >
      <p
        className="text-black font-[400] text-[16px] leading-[100%]
                        tracking-[-0.4px]"
      >
        Payment
      </p>
      <button
        className="flex items-center gap-x-[15px]"
        type="button"
        onClick={() => setModalScreen(MODAL_SCREEN.CARD_DETAIL)}
      >
        <p
          className="text-error_500 text-[16px] font-[400]
                            tracking-[-0.4px] leading-[100%]"
        >
          Add Card Details
        </p>
        <Image
          link="/images/plus.svg"
          blurLink="/images/plus.png"
          containerClasses="w-[14px] aspect-[1/1]"
          alt="not found icon"
        />
      </button>
    </div>
  )
}

export default CreditCardInformation
