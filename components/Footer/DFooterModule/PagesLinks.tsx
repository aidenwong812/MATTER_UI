import Link from "next/link"

const PagesLinks = () => (
  <div className="flex flex-col pl-[100px] col-span-2">
    <p
      className="text-[#54B3C3] font-poppins_bold 
    md:text-[12px] lg:text-[16px] xl:text-[20px]
    pb-[25px]"
    >
      Pages
    </p>
    <div
      className="flex flex-col text-[#ffffffcc] font-poppins
      xl:text-[16px] lg:text-[12.8px] md:text-[9.6px]
            gap-y-[15px]"
    >
      <Link href="/fund">
        <p className="cursor-pointer">The Fund</p>
      </Link>
      <Link href="/damian">
        <p className="cursor-pointer">Damian</p>
      </Link>
      <Link href="/why">
        <p className="cursor-pointer">Why Financial Verse</p>
      </Link>
      <Link href="/faq">
        <p className="cursor-pointer">FAQ</p>
      </Link>
      <Link href="/contact-us">
        <p className="cursor-pointer">Contact Us</p>
      </Link>
    </div>
  </div>
)

export default PagesLinks
