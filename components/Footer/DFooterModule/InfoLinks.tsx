import Link from "next/link"

const InfoLinks = () => (
  <div className="flex flex-col pl-[50px] col-span-2">
    <p
      className="text-[#54B3C3] font-poppins_bold
    md:text-[12px] lg:text-[16px] xl:text-[20px]
    pb-[25px]"
    >
      Additional Info
    </p>
    <div
      className="flex flex-col text-[#ffffffcc] font-poppins
      xl:text-[16px] lg:text-[12.8px] md:text-[9.6px]
            gap-y-[25px]"
    >
      <Link href="/privacy">
        <p className="cursor-pointer">Privacy Policy</p>
      </Link>
      <Link href="/terms">
        <p className="cursor-pointer">Terms and Condition</p>
      </Link>
      <Link href="/disclaimer">
        <p className="cursor-pointer">Disclaimer</p>
      </Link>
    </div>
  </div>
)

export default InfoLinks
