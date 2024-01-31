const ExportTransactionButton = () => (
  <button
    className="py-[16px] px-[33px] flex items-center justify-center
        gap-x-[10px] rounded-full border-gray_2 border-[1px]"
    type="button"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <g clipPath="url(#clip0_373_4639)">
        <path
          d="M16.5 9.75H18.75C18.9489 9.75 19.1397 9.82902 19.2803 9.96967C19.421 10.1103 19.5 10.3011 19.5 10.5V19.5C19.5 19.6989 19.421 19.8897 19.2803 20.0303C19.1397 20.171 18.9489 20.25 18.75 20.25H5.25C5.05109 20.25 4.86032 20.171 4.71967 20.0303C4.57902 19.8897 4.5 19.6989 4.5 19.5V10.5C4.5 10.3011 4.57902 10.1103 4.71967 9.96967C4.86032 9.82902 5.05109 9.75 5.25 9.75H7.5"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.25 6L12 2.25L15.75 6"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 2.25V12.75"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_373_4639">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
    <p className="text-[16px] leading-[120%] text-black">Export Transactions</p>
  </button>
)

export default ExportTransactionButton
