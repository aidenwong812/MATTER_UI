import { motion } from "framer-motion"
import Link from "next/link"
import Icon from "../../shared/Icon"
import Buttons from "../Header/Buttons"

const MenuList = () => {
  const navClasses = "px-[32px] py-[20px] border-b border-b-gray_3"
  return (
    <div className="w-screen h-screen fixed left-0 top-[56px] z-[2] bg-red">
      <motion.div
        className="w-full h-[calc(100vh-56px)] bg-white text-[16px] font-radikal_light 
                text-gray_8 cursor-pointer overflow-y-auto shadow-[0_0_1rem_rgba(0,0,0,.2)]"
        initial={{
          x: "100%",
        }}
        animate={{
          x: "0%",
        }}
        exit={{
          x: "0%",
        }}
        transition={{
          duration: 0.2,
        }}
      >
        <div className={`${navClasses} flex items-center gap-x-[5px] !py-[10px]`}>
          <Icon name="search" className="text-gray_8" size={24} />
          <input
            type="text"
            placeholder="Find Stuff..."
            className="border-none focus:ring-0 px-1"
          />
        </div>
        <Link href="/services">
          <p className={navClasses}>Services</p>
        </Link>
        <Link href="/products/digital">
          <p className={navClasses}>Digital Items</p>
        </Link>
        <Link href="/products/physical">
          <p className={navClasses}>Physical Products</p>
        </Link>
        <div className={`${navClasses} !border-none flex gap-x-[10px]`}>
          <Buttons />
        </div>
      </motion.div>
    </div>
  )
}

export default MenuList
