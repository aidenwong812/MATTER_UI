import { FC } from "react"

interface ContentProps {
  children: any
  className?: string
}

const Content: FC<ContentProps> = ({ children, className }) => (
  <div
    className={`md:w-[768px] lg:w-[95%] xl:w-[1280px]
  ${className || ""}`}
  >
    {children}
  </div>
)

export default Content
