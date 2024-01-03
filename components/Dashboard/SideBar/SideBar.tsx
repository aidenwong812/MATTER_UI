import Link from "next/link"
import { useRouter } from "next/router"
import Media from "../../../shared/Media"
import CopyReferralButton from "./CopyReferralButton"
import { useDashboardProvider } from "../../../providers/DashboardProvider"

const SideBar = () => {
  const router = useRouter()
  const { tokenIds } = useDashboardProvider()
  const isOverViewPage = router.pathname.includes("/overview")

  const activeClassName = "bg-[#34b5d1] !text-black"

  return (
    <div
      className="bg-[#277e9326] h-full w-full
          border-[1px] border-[#ffffff1a]
          rounded-r-[25px]
          md:pt-[30px] lg:pt-[40px] xl:pt-[50px]
          cursor-pointer
          flex flex-col gap-y-[20px]"
    >
      <Link href="/dashboard">
        <button
          className={`${isOverViewPage ? activeClassName : ""}
          flex items-center
          gap-x-[20px]
          xl:w-[273px] xl:h-[54px]
          lg:w-[218.4px] lg:h-[43.2px]
          md:w-[163.8px] md:h-[32.4px]
          md:pl-[24px] lg:pl-[32px] xl:pl-[40px] text-white
          rounded-r-full`}
          type="button"
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
            Overview
          </p>
        </button>
      </Link>
      {tokenIds.length > 0 && <CopyReferralButton referral={tokenIds[0]} />}
    </div>
  )
}

export default SideBar
