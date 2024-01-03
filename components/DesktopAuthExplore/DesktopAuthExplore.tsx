import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion"
import Link from "next/link"
import Popover from "../../shared/Popover"
import LoginButton from "../LoginButton"
import useBalance from "../../hooks/useBalance"
import useEthPrice from "../../hooks/useEthPrice"

const DesktopAuthExplore = () => {
  const { balance } = useBalance()
  const { getUsdConversion } = useEthPrice()

  return (
    <Popover id="menu_popover" className="right-0 top-[calc(100%+20px)]">
      {({ openModal }) => (
        <div className="font-poppins">
          &nbsp;
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
                w-[180px] text-[18px] 
                text-[#484848] dark:text-white
                bg-white dark:bg-[#1A2629]
                !cursor-pointer
                font-poppins_medium
                shadow-md rounded-lg  font-quicksand`}
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ delay: 0.05 * 1, duration: 0.1 }}
          >
            ${getUsdConversion(balance)}
          </motion.div>
          <Link href="/dashboard">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: 0.05 * 1, duration: 0.1 }}
            >
              Dashboard
            </motion.div>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ delay: 0.05 * 1, duration: 0.1 }}
          >
            <LoginButton
              className="w-[150px] h-[40px]
            rounded-full
            xl:text-[18px] lg:text-[14.4px] md:text-[10.8px]
            bg-[#54B3C3]"
            />
          </motion.div>
        </div>
      )}
    </Popover>
  )
}

export default DesktopAuthExplore
