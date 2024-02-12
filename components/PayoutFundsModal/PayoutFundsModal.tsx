import Input from "@/shared/Input"
import { useState } from "react"
import Modal from "../../shared/Modal"

const PayoutFundsModal = ({ isVisible, handleClose }) => {
  const [payoutValue, setPayoutOutValue] = useState("")

  return (
    <Modal isVisible={isVisible} onClose={handleClose} containerClassName="w-full md:w-[375px]">
      <div
        className="px-[26px] py-[40px] bg-[#ffffffe6] max-w-[375px]
        flex flex-col items-center gap-y-[20px]"
      >
        <Input
          value={payoutValue}
          onChange={(e) => setPayoutOutValue(e.target.value)}
          placeholder="Payout Amount"
          className="!border-gray_6 !bg-white"
          id="payout_amount"
          name="payout_amount"
        />
        <button
          type="button"
          className="border border-gray_2 rounded-full
                        py-[10px] px-[20px] flex items-center gap-x-[10px]"
        >
          Payout Funds
        </button>
      </div>
    </Modal>
  )
}

export default PayoutFundsModal
