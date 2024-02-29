import { useState } from "react"
import { formatEther } from "ethers/lib/utils"
import periods from "./period.json"
import TransactionChart from "../TransactionChart"
import Select from "@/shared/Select"
import useTransferHistory from "@/hooks/useTransferHistory"
import useConnectedWallet from "@/hooks/useConnectedWallet"

const ChartSection = () => {
  const [selectedPeriod, setSelectedPeriod] = useState()
  const { connectedWallet } = useConnectedWallet()
  const { sales } = useTransferHistory(connectedWallet)
  const chartData = sales.map((sale, id) => {
    return {
      name: id,
      uv: Number(formatEther(sale?.rawContract.value ?? 0))
    }
  })

  return (
    <div
      className="pt-[20px] border-t border-t-gray_3 mt-[20px] mb-[20px]
        md:px-[24px] lg:px-[32px] xl:px-[40px] px-[16px] md:px-0"
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
