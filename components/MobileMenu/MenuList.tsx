import Link from "next/link"
import Media from "../../shared/Media"
import Popover from "../../shared/Popover"
import LoginButton from "../LoginButton"
import { useTheme } from "../../providers/ThemeProvider"
import Switch from "../../shared/Switch"

const MenuList = () => {
  const { onChangeThemeConfig, themeMode } = useTheme()

  const onToggle = () => {
    onChangeThemeConfig()
  }
  return (
    <Popover id="collections_menu_popover" className="right-[-15px]">
      {() => (
        <Media
          type="image"
          link="/images/Header/Mobile/menu_icon.png"
          blurLink="/images/Header/Mobile/menu_icon.png"
          containerClasses="w-[24px] h-[24px]"
        />
      )}
      {() => (
        <div
          className="min-w-[200px]
        rounded-[20px]
        p-[20px]
        bg-gradient-to-b
        from-[#A1D7EC] to-[#60E7CE]
        text-white
        font-poppins_semibold
        flex flex-col gap-y-[10px]
        cursor-pointer"
        >
          <Link href="/invest">
            <p>Invest</p>
          </Link>
          <Link href="/register">
            <p>Register</p>
          </Link>
          <Link href="/register">
            <p>Contact</p>
          </Link>
          <LoginButton
            className="border-[1px] border-white
            mb-[10px]
            cursor-pointer
            uppercase
            rounded-[10px]
            bg-gradient-to-b
            from-[#24AACB] to-[#7DD3E7]
            w-[94.8px] h-[28.8px]"
          />
          <div className="flex justify-center gap-x-[5px]">
            <p
              className="font-poppins_medium text-[18px] 
            text-[white] dark:text-[white]
            capitalize"
            >
              {themeMode} Mode
            </p>
            <Switch id="theme-selector" onClick={onToggle} value={themeMode === "dark"} />
          </div>
          <div className="flex gap-x-[20px]">
            <Media
              type="image"
              link="/images/Footer/discord.png"
              blurLink="/images/Footer/disord.png"
              containerClasses="w-[30px] h-[24px]"
            />
            <Media
              type="image"
              link="/images/Footer/twitter.png"
              blurLink="/images/Footer/twitter.png"
              containerClasses="w-[30px] h-[24px]"
            />
          </div>
        </div>
      )}
    </Popover>
  )
}
export default MenuList
