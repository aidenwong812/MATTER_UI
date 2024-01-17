import { MODAL_SCREEN } from "../../hooks/useCreditCardModal"
import { useCheckOut } from "../../providers/CheckOutProvider"
import Modal from "../../shared/Modal"
import CreditCardDetail from "./CreditCardDetail"
import DeliveryAddress from "./DeliveryAddress"
import InformationSelect from "./InformationSelect"

const CreditCardModal = ({ isVisible, handleClose }) => {
  const { modalScreen } = useCheckOut()

  return (
    <Modal isVisible={isVisible} onClose={handleClose} containerClassName="w-full md:w-[375px]">
      {modalScreen === MODAL_SCREEN.INFORMATION_SELECT && <InformationSelect />}
      {modalScreen === MODAL_SCREEN.DELIVERY_ADDRESS && <DeliveryAddress />}
      {modalScreen === MODAL_SCREEN.CARD_DETAIL && <CreditCardDetail />}
    </Modal>
  )
}

export default CreditCardModal
