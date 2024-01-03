import useTotalSupply from "../../../../hooks/useTotalSupply"
import commafy from "../../../../lib/commafy"
import InfoText from "./InfoText"
import Spinner from "./Spinner"

const InvestInfo = () => {
  const { totalSupply } = useTotalSupply()
  const goal = "$ 1,000,000"
  const raised = totalSupply * 1500

  return (
    <div
      className="col-span-7 
    xl:p-[40px] lg:p-[32px] md:p-[24px]"
    >
      <p
        className="md:text-[14.4px] lg:text-[19.2px] xl:text-[24px]
        text-[#484848] dark:text-white font-poppins_medium
        xl:pb-[50px] lg:pb-[40px] md:pb-[30px]"
      >
        Progress
      </p>
      <p
        className="font-poppins_semibold text-[#54B3C3]
        xl:text-[40px] lg:text-[32px] md:text-[24px]
        xl:pb-[50px] lg:pb-[40px] md:pb-[30px]"
      >
        $ {commafy(raised)}{" "}
        <span
          className="md:text-[10.8px] lg:text-[14.4px] xl:text-[18px]
        font-poppins text-[#484848] dark:text-white"
        >
          Raised
        </span>
      </p>
      <Spinner value={70} />
      <div
        className="flex xl:pt-[50px] lg:pt-[40px] md:pt-[30px]
      justify-between"
      >
        <InfoText amount={goal} text="Goal" />
        <InfoText amount={totalSupply} text="Contributor" />
        <InfoText amount={totalSupply} text="Transactions" />
      </div>
    </div>
  )
}

export default InvestInfo
