import React, { ReactNode } from "react"
import { motion } from "framer-motion"

interface IModal {
  onClose: () => any
  children: ReactNode
  isVisible: Boolean
  containerClassName?: string
}

function Modal({ children, isVisible, containerClassName, onClose }: IModal) {
  return (
    <motion.div
      className={`fixed top-0 left-0 w-screen h-screen 
        z-40 px-[20px] md:px-0
        justify-center items-center pt-[56px] flex
        ${isVisible ? "" : "pointer-events-none"}
      `}
      animate={{
        visibility: isVisible ? "visible" : "hidden",
      }}
      initial={{
        visibility: "hidden",
      }}
      transition={{
        delay: isVisible ? 0 : 0.5,
      }}
    >
      <div
        className="absolute backdrop-blur-[5px] 
      left-0 top-0 w-full h-full z-[1] bg-[#d9d9d980]"
        onClick={async (e) =>
          e.target === e.currentTarget && onClose ? await onClose() : () => {}
        }
      />
      <motion.div
        className={`relative z-[2] max-h-[90%]
        overflow-y-auto shadow-gray_shadow rounded-[10px]
        ${containerClassName || ""}`}
        animate={{
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : 100,
        }}
        initial={{
          opacity: 0,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

export default Modal
