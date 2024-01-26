import Image from "../../shared/Image"
import { FORM_MODE } from "../../hooks/useDeliveryFormData"
import { useDeliveryForm } from "../../providers/DeliveryFormProvider"

const DeliveryInformation = () => {
  const {
    setFormMode,
    deliveryFirstName,
    deliveryLastName,
    deliveryAddress1,
    deliveryZipCode,
    deliveryState,
    deliveryCountryCode,
    isCompletedDelivery,
  } = useDeliveryForm()

  return (
    <div
      className="flex justify-between items-center w-full
              p-[24px] border-t border-t-gray_3 border-b border-b-gray_3"
    >
      <p
        className="text-black font-[400] text-[16px] leading-[100%]
                  tracking-[-0.4px]"
      >
        Delivery
      </p>
      {isCompletedDelivery ? (
        <button
          className="text-gray_6 font-[400] text-[16px] leading-[100%] tracking-[-0.4px]
        flex flex-col items-end"
          type="button"
          onClick={() => setFormMode(FORM_MODE.EDIT_MODE)}
        >
          <p>
            {deliveryFirstName} {deliveryLastName}
          </p>
          <p>{deliveryAddress1}</p>
          <p>
            {deliveryZipCode}, {deliveryState}, {deliveryCountryCode}
          </p>
        </button>
      ) : (
        <button
          type="button"
          className="flex items-center gap-x-[15px]"
          onClick={() => setFormMode(FORM_MODE.EDIT_MODE)}
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
      )}
    </div>
  )
}

export default DeliveryInformation
