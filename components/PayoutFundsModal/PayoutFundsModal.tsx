import { useState } from "react"
import usePayoutByPrivy from "@/hooks/usePayoutByPrivy"
import Input from "@/shared/Input"
import Modal from "@/shared/Modal"

const PayoutFundsModal = ({ isVisible, handleClose }) => {
  const { payoutByPrivy } = usePayoutByPrivy()
  const [coinbaseUsdcPayoutAddress, setCoinbaseUsdcPayoutAddress] = useState("")

  const handlePayout = async () => {
    await payoutByPrivy(coinbaseUsdcPayoutAddress)
  }

  return (
    <Modal isVisible={isVisible} onClose={handleClose} containerClassName="w-full md:w-[375px]">
      <div
        className="px-[26px] py-[40px] bg-[#ffffffe6] max-w-[375px]
        flex flex-col items-center gap-y-[20px]"
      >
        <Input
          value={coinbaseUsdcPayoutAddress}
          onChange={(e) => setCoinbaseUsdcPayoutAddress(e.target.value)}
          placeholder="Coinbase USDC (base) Address"
          className="!border-gray_6 !bg-white"
          id="payout_amount"
          name="payout_amount"
        />
        <button
          type="button"
          className="border border-gray_2 rounded-full
                        py-[10px] px-[20px] flex items-center gap-x-[10px]"
          onClick={handlePayout}
        >
          Payout
        </button>
      </div>
    </Modal>
  )
}

export default PayoutFundsModal
