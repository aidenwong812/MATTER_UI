import PayoutFundsModal from "@/components/PayoutFundsModal"
import { useState } from "react"

const PayoutFundsButtons = () => {
  const [isOpenPayoutFundsModal, setIsOpenPayoutFundsModal] = useState(false)

  return (
    <>
      <button
        className="py-[16px] px-[33px] flex items-center justify-center
              gap-x-[10px] rounded-full border-gray_2 border-[1px]"
        type="button"
        onClick={() => setIsOpenPayoutFundsModal(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clipPath="url(#clip0_740_1073)">
            <path
              d="M12 2.25V4.5"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 19.5V21.75"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.25 8.25C17.25 7.75754 17.153 7.26991 16.9645 6.81494C16.7761 6.35997 16.4999 5.94657 16.1517 5.59835C15.8034 5.25013 15.39 4.97391 14.9351 4.78545C14.4801 4.597 13.9925 4.5 13.5 4.5H10.5C9.50544 4.5 8.55161 4.89509 7.84835 5.59835C7.14509 6.30161 6.75 7.25544 6.75 8.25C6.75 9.24456 7.14509 10.1984 7.84835 10.9017C8.55161 11.6049 9.50544 12 10.5 12H14.25C15.2446 12 16.1984 12.3951 16.9017 13.0983C17.6049 13.8016 18 14.7554 18 15.75C18 16.7446 17.6049 17.6984 16.9017 18.4017C16.1984 19.1049 15.2446 19.5 14.25 19.5H9.75C8.75544 19.5 7.80161 19.1049 7.09835 18.4017C6.39509 17.6984 6 16.7446 6 15.75"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_740_1073">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <p className="text-[16px] leading-[120%] text-black">Pay out Funds</p>
      </button>
      <PayoutFundsModal
        isVisible={isOpenPayoutFundsModal}
        handleClose={() => setIsOpenPayoutFundsModal(false)}
      />
    </>
  )
}
export default PayoutFundsButtons
