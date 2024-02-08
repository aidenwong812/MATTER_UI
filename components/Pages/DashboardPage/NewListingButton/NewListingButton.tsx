import { useRouter } from "next/router"

const NewListingButton = () => {
  const { push } = useRouter()

  return (
    <button
      className="py-[16px] px-[33px] flex items-center justify-center
          gap-x-[10px] rounded-full border-gray_2 border-[1px]"
      type="button"
      onClick={() => push("/create")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <g clipPath="url(#clip0_740_2161)">
          <path
            d="M3.75 12H20.25"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 3.75V20.25"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_740_2161">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <p className="text-[16px] leading-[120%] text-black">Add New Listings</p>
    </button>
  )
}

export default NewListingButton
