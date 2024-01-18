import React, { ReactNode } from "react"
import FadeInWhenVisible from "../../components/FadeInWhenVisible"

interface IModal {
  onClose: () => any
  children: ReactNode
  isVisible: Boolean
  containerClassName?: string
}

function Modal({ children, isVisible, containerClassName, onClose }: IModal) {
  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen 
        z-40 px-[20px] md:px-0
        flex justify-center items-center pt-[56px]
        ${isVisible ? "visible" : "hidden"}
      `}
    >
      <div
        className="absolute backdrop-blur-[5px] 
      left-0 top-0 w-full h-full z-[1] bg-[#d9d9d980]"
        onClick={async (e) =>
          e.target === e.currentTarget && onClose ? await onClose() : () => {}
        }
      />
      <FadeInWhenVisible
        className={`relative z-[2] max-h-[90%]
      overflow-y-auto shadow-gray_shadow rounded-[10px]
      ${containerClassName || ""}`}
      >
        {children}
      </FadeInWhenVisible>
    </div>
  )
}

export default Modal
