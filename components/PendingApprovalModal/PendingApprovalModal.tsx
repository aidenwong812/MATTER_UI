import Image from "../../shared/Image"
import Modal from "../../shared/Modal"

const PendingApprovalModal = () => (
  <Modal isVisible onClose={null}>
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
        Your business account is pending approval.
      </p>
      <p className="text-[12px] leading-[100%] tracking-[-0.3px] text-gray_6 my-[20px]">
        Every business account is manually verified to ensure the quality of our marketplace.
      </p>
      <p className="text-[12px] leading-[100%] tracking-[-0.3px] text-gray_6 mb-[20px]">
        Typical wait time: 2 Business Days
      </p>
    </div>
  </Modal>
)

export default PendingApprovalModal
