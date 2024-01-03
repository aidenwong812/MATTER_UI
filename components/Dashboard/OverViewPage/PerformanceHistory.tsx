import HistoryChart from "./HistoryChart"

const PerformanceHistory = () => (
  <div
    className="bg-[#919cc126] md:bg-[#277e9326]
      border-[1px] border-[white] md:border-[#ffffff1a]
      rounded-[15px]
      flex flex-col
      px-[10px] py-[15px] md:p-[30px] lg:p-[40px] xl:p-[50px]
      mt-[20px] md:mt-[30px] lg:mt-[40px] xl:mt-[50px]"
  >
    <p
      className="font-poppins_bold
    text-[8.25px] samsungS8:text-[11px] xs:text-[12px] md:text-[19.2px] xl:text-[24px]
    text-white"
    >
      Performance history
    </p>
    <div
      className="flex justify-end items-center
    text-white cursor-pointer
    gap-x-[10px] xs:gap-x-[20px]"
    >
      <p
        className="font-poppins_medium
        text-[6px] xs:text-[8px] md:text-[7.2px] lg:text-[9.6px] xl:text-[12px]"
      >
        Market Value
      </p>
      <div className="flex items-center gap-x-[10px]">
        <div className="bg-[#29E5FF] h-[1px] w-[12px]" />
        <p
          className="font-poppins_medium
          text-[6px] xs:text-[8px] md:text-[7.2px] lg:text-[9.6px] xl:text-[12px]"
        >
          Invested Capital
        </p>
      </div>
    </div>
    <div className="p-0 md:p-[30px]">
      <HistoryChart />
    </div>
  </div>
)

export default PerformanceHistory
