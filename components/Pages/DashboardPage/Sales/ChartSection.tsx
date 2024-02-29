import { formatEther } from "ethers/lib/utils"
import { useDashboard } from "@/providers/DashboardProvider"
import Select from "@/shared/Select"
import periods from "./period.json"
import TransactionChart from "../TransactionChart"

const ChartSection = () => {
  const { sales, selectedPeriod, setSelectedPeriod } = useDashboard()
  const chartData = sales.map((sale) => {
    const blockTimestamp = new Date(sale?.metadata.blockTimestamp)
    return {
      name: blockTimestamp.toLocaleTimeString("en-US", {
        year: "2-digit",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hourCycle: "h23",
      }),
      uv: parseFloat(formatEther(sale?.rawContract.value ?? 0)).toFixed(2),
    }
  })

  return (
    <div
      className="pt-[20px] border-t border-t-gray_3 mt-[20px] mb-[20px]
        md:px-[24px] lg:px-[32px] xl:px-[40px] px-[16px]"
    >
      <Select
        id="qantity"
        name="qantity"
        value={selectedPeriod}
        className="!w-[322px]"
        onChange={(e) => setSelectedPeriod(e.target.value)}
        options={periods}
      />
      <TransactionChart chartData={chartData} />
    </div>
  )
}

export default ChartSection
