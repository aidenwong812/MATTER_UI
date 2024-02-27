import useUsdc from "@/hooks/useUsdc"
import { formatEther } from "ethers/lib/utils"

const Balance = () => {
  const { balance } = useUsdc()

  return (
    <div className="px-[16px] md:px-0">
      <p className="text-gray_6 text-[18px] leading-[28px]">Current Balance</p>
      <div
        className="flex flex-col md:flex-row items-start md:items-center 
      gap-y-[10px] gap-x-[20px]"
      >
        <div className="flex items-center gap-x-[10px]">
          <p className="text-[56px] md:text-[70px] leading-[110%] tracking-[-1.75px]">
            {parseFloat(formatEther(balance ?? 0)).toFixed(2)}
          </p>
          <p className="text-[18px] leading-[28px]">USDC</p>
        </div>
      </div>
    </div>
  )
}

export default Balance
