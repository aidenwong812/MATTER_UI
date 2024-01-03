import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import { useRouter } from "next/router"
import { motion } from "framer-motion"
import Popover from "../../shared/Popover"
import exploreList from "./data.json"

const DesktopExplore = () => {
  const { pathname } = useRouter()

  const isFundPage = pathname.includes("/fund")
  const isDamianPage = pathname.includes("/damian")
  const isWhyVersePage = pathname.includes("/whyverse")
  const isHowFundPage = pathname.includes("/howfund")
  const isFAQPage = pathname.includes("/faq")
  const isContactUsPage = pathname.includes("/contactus")

  const menuText = () => {
    if (isFundPage) return "The Fund"
    if (isDamianPage) return "Damian"
    if (isWhyVersePage) return "Why Financial Verse"
    if (isHowFundPage) return "How the Fund Works"
    if (isFAQPage) return "FAQ"
    if (isContactUsPage) return "Contact Us"

    return "Menu"
  }

  return (
    <Popover id="menu_popover">
      {({ openModal }) => (
        <div
          className={`font-poppins_medium rounded-full 
              flex justify-center items-center gap-x-[5px]
              px-[30px] h-[47px] bg-[#54b3c333]
              text-[#484848] dark:text-white text-[18px] ${openModal && "shadow-md"}`}
        >
          {menuText()}&nbsp;
          {!openModal && (
            <ChevronDownIcon className="inline w-[24px] h-[24px] align-middle" color="#54B3C3" />
          )}
          {openModal && (
            <ChevronUpIcon className="inline w-[24px] h-[24px] align-middle" color="#54B3C3" />
          )}
        </div>
      )}
      {() => (
        <div
          className={`flex flex-col items-start gap-y-4 p-4
                  w-[231px] text-[18px] 
                  text-[#484848] dark:text-white
                  bg-white dark:bg-[#1A2629]
                  !cursor-pointer
                  shadow-md rounded-lg  font-quicksand`}
        >
          {exploreList.map((item, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <Link href={item.link} key={i}>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: 0.05 * (i + 1), duration: 0.1 }}
              >
                {item.label}
              </motion.div>
            </Link>
          ))}
        </div>
      )}
    </Popover>
  )
}

export default DesktopExplore
