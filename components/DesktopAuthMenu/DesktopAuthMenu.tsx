import { useRouter } from "next/router"
import { usePrivy } from "@privy-io/react-auth"
import Media from "../../shared/Media"
import { useTheme } from "../../providers/ThemeProvider"
import DesktopAuthExplore from "../DesktopAuthExplore"
import LoginButton from "../LoginButton"
import { useUserProvider } from "../../providers/UserProvider"

const DesktopAuthMenu = () => {
  const { pathname } = useRouter()
  const { themeMode } = useTheme()

  const { user: privyUser } = usePrivy()
  const { username } = useUserProvider()

  const isInvestPage = pathname.includes("/invest")

  const headerTitle = () => {
    if (isInvestPage) return "Invest On Financial Verse"
    return "No Title"
  }

  return (
    <div className="flex justify-between">
      <p
        className="md:text-[19.2px] lg:text-[25.6px] xl:text-[32px]
      font-poppins_bold text-[#484848] dark:text-white"
      >
        {headerTitle()}
      </p>
      <div
        className="flex items-center 
      xl:gap-x-[50px] lg:gap-x-[40px] md:gap-x-[30px]"
      >
        <Media
          type="image"
          link={
            themeMode === "light"
              ? "/images/Header/Desktop/bell.svg"
              : "/images/Header/Desktop/white-bell.svg"
          }
          blurLink={
            themeMode === "light"
              ? "/images/Header/Desktop/bell.png"
              : "/images/Header/Desktop/white-bell.png"
          }
          containerClasses="xl:w-[24px] xl:h-[24px]
          lg:w-[19.2px] lg:h-[19.2px]
          md:w-[14.4px] md:h-[14.4px]"
        />
        <div
          className="flex items-center 
        xl:gap-x-[20px] lg:gap-x-[16px] md:gap-x-[12px]"
        >
          {privyUser ? (
            <>
              <p
                className="font-poppins_medium
          md:text-[10.8px] lg:text-[14.4px] xl:text-[18px]
          dark:text-white"
              >
                {username}
              </p>
              <div
                className="bg-[#54B3C3] 
            xl:w-[48px] lg:w-[38.4px] md:w-[28.8px] 
            xl:h-[48px] lg:h-[38.4px] md:h-[28.8px]
            rounded-full
            flex items-center justify-center"
              >
                <p
                  className="font-poppins_bold uppercase text-white
            xl:text-[16px] lg:text-[12.8px] md:text-[9.6px]"
                >
                  {username?.[0]}
                </p>
              </div>
              <DesktopAuthExplore />
            </>
          ) : (
            <LoginButton
              className="border-[1px] border-white
                cursor-pointer
                !rounded-full
                !bg-[#54B3C3]
                md:text-[10.8px] lg:text-[14.4px] xl:text-[18px]
                lg:w-[156px] lg:h-[47px]
                md:w-[94.8px] md:h-[28.8px]"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default DesktopAuthMenu
