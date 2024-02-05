import { useDeliveryForm } from "../../providers/DeliveryFormProvider"
import Modal from "../../shared/Modal"
import CrossMintCheckOut from "../CrossMintCheckOut"
import DeliveryAddress from "./DeliveryAddress"
import CheckOutDetail from "./CheckOutDetail"
import { FORM_MODE } from "../../hooks/useDeliveryFormData"

const CheckOutModal = ({ isVisible, handleClose, cart, totalPrice }) => {
  const { formMode } = useDeliveryForm()

  return (
    <Modal isVisible={isVisible} onClose={handleClose} containerClassName="w-full md:w-[375px]">
      <div
        className={`bg-white w-full py-[40px] flex flex-col items-center 
      ${formMode === FORM_MODE.VISIBLE_MODE ? "visible" : "hidden"}`}
      >
        <CheckOutDetail totalPrice={totalPrice} />
        <div className="w-full flex-col items-center flex px-[24px]">
          <CrossMintCheckOut cart={cart} totalPrice={totalPrice} />
        </div>
      </div>
      {formMode === FORM_MODE.EDIT_MODE && <DeliveryAddress />}
    </Modal>
  )
}

export default CheckOutModal
