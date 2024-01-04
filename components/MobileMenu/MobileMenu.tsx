import { useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "../../providers/ThemeProvider"
import MenuList from "../MenuList"

const MobileMenu = () => {
  const [isOpenMobileList, setIsOpenMobileList] = useState(false)
  const { themeMode } = useTheme()
  const isLightMode = themeMode === "light"

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpenMobileList(!isOpenMobileList)}
        className="w-[30px] flex flex-col gap-y-[6px]"
      >
        <motion.div
          className={`${isLightMode ? "bg-gray_8" : "bg-black"} h-[2px] w-full`}
          animate={{
            transform: isOpenMobileList ? "rotate(45deg) translateY(5.5px)" : "rotate(0deg)",
          }}
          initial={{
            transform: "rotate(0deg)",
          }}
        />
        {!isOpenMobileList && (
          <motion.div className={`${isLightMode ? "bg-gray_8" : "bg-black"} h-[2px] w-full`} />
        )}
        <motion.div
          className={`${isLightMode ? "bg-gray_8" : "bg-black"} h-[2px] w-full`}
          animate={{
            transform: isOpenMobileList ? "rotate(-45deg) translateY(-5.5px)" : "rotate(0deg)",
          }}
          initial={{
            transform: "rotate(0deg)",
          }}
        />
      </button>
      {isOpenMobileList && <MenuList />}
    </>
  )
}

export default MobileMenu
