import Link from "next/link"

const InfoLinks = () => (
  <div
    className="font-poppins
        text-[11px] samsungS8:text-[12px]"
  >
    <p
      className="text-[#54B3C3] pb-[20px]
            font-poppins_bold
            text-[16px] samsungS8:text-[18px]"
    >
      Additional Info
    </p>
    <div className="flex flex-col gap-y-[5px]">
      <Link href="/privacy">
        <p className="text-[#ffffffcc]">Privacy Policy</p>
      </Link>
      <Link href="/terms">
        <p className="text-[#ffffffcc]">Terms and Condition</p>
      </Link>
      <Link href="/disclaimer">
        <p className="text-[#ffffffcc]">Disclaimer</p>
      </Link>
    </div>
  </div>
)

export default InfoLinks
