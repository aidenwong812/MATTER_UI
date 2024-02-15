import useBalance from "@/hooks/useBalance"
import { formatEther } from "viem"

const Balance = () => {
  const { balance } = useBalance()

  return (
    <div className="px-[16px] md:px-0">
      <p className="text-gray_6 text-[18px] leading-[28px]">Current Balance</p>
      <div
        className="flex flex-col md:flex-row items-start md:items-center 
      gap-y-[10px] gap-x-[20px]"
      >
        <div className="flex items-center gap-x-[10px]">
          <p className="text-[56px] md:text-[70px] leading-[110%] tracking-[-1.75px]">
            {parseFloat(formatEther(balance)).toFixed(4)}
          </p>
          <p className="text-[18px] leading-[28px]">ETH</p>
        </div>
        <div
          className="bg-success_1 rounded-[5px] py-[5px] px-[10px]
                  flex jusitfy-center items-center gap-x-[10px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="7"
            viewBox="0 0 10 7"
            fill="none"
          >
            <path
              d="M4.17801 0.686447C4.57569 0.11244 5.42431 0.112441 5.82199 0.686448L9.10877 5.43051C9.56825 6.09371 9.0936 7 8.28678 7H1.71322C0.906401 7 0.431746 6.09371 0.891226 5.43051L4.17801 0.686447Z"
              fill="#2AA147"
            />
          </svg>
          <p className="text-[16px] leading-[28px] text-success_6">$0.0K today</p>
        </div>
      </div>
    </div>
  )
}

export default Balance
