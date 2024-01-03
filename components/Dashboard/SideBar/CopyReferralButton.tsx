import { useState } from "react"
import { toast } from "react-toastify"
import Media from "../../../shared/Media"
import copyToClipboard from "../../../lib/copyToClipboard"

const CopyReferralButton = ({ referral }) => {
  const [isClicked, setIsClicked] = useState(false)

  const activeClassName = "bg-[#34b5d1] !text-black"

  const handleClick = async () => {
    const response = await copyToClipboard(
      `https://financialverse.vercel.app/invest?referral=${referral}`,
    )
    if (response) {
      toast.success("copied referral link!")
      setIsClicked(true)
    }
  }

  return (
    <button
      className={`${isClicked ? activeClassName : ""}
            flex items-center
            gap-x-[20px]
            xl:w-[273px] xl:h-[54px]
            lg:w-[218.4px] lg:h-[43.2px]
            md:w-[163.8px] md:h-[32.4px]
            md:pl-[24px] lg:pl-[32px] xl:pl-[40px] text-white
            rounded-r-full`}
      type="button"
      onClick={handleClick}
    >
      <Media
        type="image"
        containerClasses="w-[15px] h-[11px]"
        link="/images/Dashboard/SideBar/overview.png"
        blurLink="/images/Dashboard/SideBar/overview.png"
      />
      <p
        className="font-poppins_medium
          md:text-[10.8px] lg:text-[14.4px] xl:text-[18px]"
      >
        Referral Link
      </p>
    </button>
  )
}

export default CopyReferralButton
