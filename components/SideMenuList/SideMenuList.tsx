import { useRouter } from "next/router"
import Button from "../../shared/Button"
import Media from "../../shared/Media"
import menuData from "./menu.json"

const SideMenuList = () => {
  const { pathname } = useRouter()
  const router = useRouter()

  const isDashboardPage = pathname.includes("/dashboard")
  const isInvestPage = pathname.includes("/invest")
  const isHistoryPage = pathname.includes("/history")
  const isSettingPage = pathname.includes("/setting")

  const activeItem = () => {
    if (isDashboardPage) return "dashboard"
    if (isInvestPage) return "invest"
    if (isHistoryPage) return "history"
    if (isSettingPage) return "setting"
    return ""
  }

  return (
    <div
      className="flex flex-col 
        xl:gap-y-[30px] lg:gap-y-[24px] md:gap-y-[18px]"
    >
      {Object.entries(menuData).map(([id, data]) => (
        <Button
          key={id}
          id={id}
          className={`xl:w-[255px] xl:h-[56px]
                    lg:w-[204px] lg:h-[44.8px]
                    md:w-[153px] md:h-[33.6px]
                    xl:px-[20px] lg:px-[16px] md:px-[12px]
                    xl:!rounded-[20px] lg:!rounded-[16px] md:!rounded-[12px]
                    ${
                      id === activeItem()
                        ? "!bg-[#54B3C3]"
                        : "!bg-[#F0F8FA] dark:!bg-[#1A2629] !text-[#484848] dark:!text-white"
                    }`}
          onClick={() => router.push(data.link)}
        >
          <div
            className="w-full h-full
                    flex items-center font-poppins_semibold
                    xl:text-[16px] lg:text-[12.8px] md:text-[9.6px]
                    xl:gap-x-[10px] lg:gap-x-[8px] md:gap-x-[6px]"
          >
            <Media
              type="image"
              link={id === activeItem() ? data.activeIcon : data.icon}
              blurLink={id === activeItem() ? data.activeBlurIcon : data.blurIcon}
              containerClasses="xl:w-[32px] lg:w-[25.6px] md:w-[19.2px]
                            xl:h-[33px] lg:h-[26.4px] md:h-[19.8px]"
            />
            {data.label}
          </div>
        </Button>
      ))}
    </div>
  )
}

export default SideMenuList
