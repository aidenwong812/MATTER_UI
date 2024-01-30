import Image from "../../shared/Image"
import Modal from "../../shared/Modal"
import EmailForVerify from "./EmailForVerify"
import InputForm from "./InputForm"

const BusinessCreateModal = ({ isVisible, toggleModal }) => (
  <Modal isVisible={isVisible} onClose={toggleModal}>
    <div className="px-[26px] py-[40px] bg-[#ffffffe6] max-w-[375px]">
      <div className="flex items-center gap-x-[8px]">
        <Image
          link="/images/matter_mini_logo_black.svg"
          blurLink="/images/matter_mini_logo.black.png"
          containerClasses="w-[19px] h-[14px]"
          alt="not foun icon"
        />
        <p className="leading-[140%] tracking-[6px] text-[12px] text-black">BUSINESS</p>
      </div>
      <p className="leading-[110%] tracking-[-0.7px] text-[28px] mt-[32px]">
        Set up your business account.
      </p>
      <p className="text-[16px] leading-[100%] tracking-[-0.4px] mt-[20px] mb-[9px]">
        {`We've sent to a code to`}
      </p>
      <EmailForVerify />
      <InputForm />
    </div>
  </Modal>
)

export default BusinessCreateModal
