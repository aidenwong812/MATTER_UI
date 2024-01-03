import Link from "next/link"

const PagesLinks = () => (
  <div
    className="font-poppins
        text-[11px] samsungS8:text-[12px]"
  >
    <p
      className="text-[#54B3C3] pb-[20px]
            font-poppins_bold 
            text-[16px] samsungS8:text-[18px]"
    >
      Pages
    </p>
    <div className="flex flex-col gap-y-[5px]">
      <Link href="/fund">
        <p className="text-[#ffffffcc]">The Fund</p>
      </Link>
      <Link href="/damian">
        <p className="text-[#ffffffcc]">Damian</p>
      </Link>
      <Link href="/whyverse">
        <p className="text-[#ffffffcc]">Why Financial Verse</p>
      </Link>
      <Link href="/faq">
        <p className="text-[#ffffffcc]">FAQ</p>
      </Link>
      <Link href="/contactus">
        <p className="text-[#ffffffcc]">Contact Us</p>
      </Link>
    </div>
  </div>
)

export default PagesLinks
