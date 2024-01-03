import { useDashboardProvider } from "../../../providers/DashboardProvider"

const MarketValue = () => {
  const { total, availableRewards } = useDashboardProvider()

  return (
    <div>
      <p
        className="font-poppins_bold
          md:text-[19.2px] lg:text-[25.6px] xl:text-[32px]
          text-[14px]"
      >
        ${(total + availableRewards)?.toFixed?.(2)}
      </p>
      <p
        className="font-poppins_medium
        text-[6px] md:text-[7.2px] lg:text-[9.6px] xl:text-[12px]"
      >
        Market Value{" "}
      </p>
    </div>
  )
}

export default MarketValue
