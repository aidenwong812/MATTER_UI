import { useRouter } from "next/router"
import Button from "../../shared/Button"
import Media from "../../shared/Media"
import SideMenuList from "../SideMenuList"

const SideMenu = () => {
  const router = useRouter()

  return (
    <div
      className="flex flex-col
        h-screen 
        xl:w-[350px] lg:w-[280px] md:w-[210px]
        bg-[#F0F8FA] dark:bg-[#1A2629]
        xl:p-[50px] lg:p-[40px] md:p-[30px]"
    >
      <div>
        <div className="xl:pb-[64px] lg:pb-[51.2px] md:pb-[38.4px]">
          <Media
            type="image"
            link="/images/SideMenu/logo.svg"
            blurLink="/images/SideMenu/logo.png"
            containerClasses="xl:w-[53px] lg:w-[42.4px] md:w-[31.8px]
            xl:h-[59px] lg:h-[47.2px] md:h-[35.4px]"
          />
        </div>
        <SideMenuList />
      </div>
      <div className="flex-grow flex items-end">
        <Button
          id="info_btn"
          className="!text-[#484848] dark:!text-white
          font-poppins_semibold
          xl:text-[16px] lg:text-[12.8px] md:text-[9.6px]"
          onClick={() => router.push("/info")}
        >
          <Media
            type="image"
            link="/images/SideMenu/info.svg"
            blurLink="/images/SideMenu/info.png"
            containerClasses="md:w-[19.2px] lg:w-[25.6px] xl:w-[32px] 
            lg:h-[25.6px] xl:h-[32px] md:h-[19.2px]"
          />
          Help
        </Button>
      </div>
    </div>
  )
}

export default SideMenu
