import Modal from "../../shared/Modal"
import InfoSubmitForm from "./InfoSubmitForm"

const ReceiveKitModal = ({ isModalVisible, toggleIsVisible }) => (
  <Modal
    id="receive_kit_modal"
    isVisible={isModalVisible}
    onClose={toggleIsVisible}
    showCloseButton
    modalClassName="!justify-end"
    containerClassName="rounded-l-[15px] md:!rounded-l-[20px] overflow-hidden"
  >
    <div
      className="bg-white dark:bg-[#10181A]
    xl:px-[50px] xl:py-[40px]
    lg:px-[40px] lg:py-[32px]
    md:px-[30px] md:py-[24px]
    font-poppins"
    >
      <p
        className="font-poppins_bold
        dark:text-white
        md:text-[19.2px] lg:text-[25.6px] xl:text-[32px]
        leading-[120%]"
      >
        Receive your
        <br />
        <span className="text-[#54B3C3]">Information Kit</span> Today!
      </p>
      <pre
        className="font-poppins 
      md:text-[10.8px] lg:text-[14.4px] xl:text-[18px]
      pt-[25px] dark:text-white"
      >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit,\nsed do eiusmod tempor incididunt ut labore.`}</pre>
      <InfoSubmitForm />
    </div>
  </Modal>
)

export default ReceiveKitModal
