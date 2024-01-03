import useMyFunds from "../../../hooks/useMyFunds"

const MyFunds = () => {
  const { total } = useMyFunds()

  return (
    <div>
      <p
        className="font-poppins_bold
          md:text-[19.2px] lg:text-[25.6px] xl:text-[32px]
          text-[14px]"
      >
        ${total.toFixed(2)}
      </p>
      <p
        className="font-poppins_medium
        text-[6px] md:text-[7.2px] lg:text-[9.6px] xl:text-[12px]"
      >
        My Funds
      </p>
    </div>
  )
}

export default MyFunds
