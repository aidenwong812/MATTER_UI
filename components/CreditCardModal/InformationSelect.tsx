import { MODAL_SCREEN } from "../../hooks/useCreditCardModal"
import { useCheckOut } from "../../providers/CheckOutProvider"
import Image from "../../shared/Image"

const InformationSelect = () => {
  const { setModalScreen } = useCheckOut()

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
      <div
        className="flex justify-between items-center w-full mt-[32px]
              p-[24px] border-t border-t-gray_3 border-b border-b-gray_3"
      >
        <p
          className="text-black font-[400] text-[16px] leading-[100%]
                  tracking-[-0.4px]"
        >
          Delivery
        </p>
        <button
          type="button"
          className="flex items-center gap-x-[15px]"
          onClick={() => setModalScreen(MODAL_SCREEN.DELIVERY_ADDRESS)}
        >
          <p
            className="text-error_500 text-[16px] font-[400]
                      tracking-[-0.4px] leading-[100%]"
          >
            Add Delivery Address
          </p>
          <Image
            link="/images/plus.svg"
            blurLink="/images/plus.png"
            containerClasses="w-[14px] aspect-[1/1]"
            alt="not found icon"
          />
        </button>
      </div>
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
        <button className="flex items-center gap-x-[15px]" type="button">
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
          $10.00
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
