import Header from "../Header"
import { ILayout } from "./types"

const BaseLayout = ({ children, className }: ILayout) => (
  <div
    className={`w-full flex justify-center bg-white
    min-h-screen overflow-hidden ${className}`}
  >
    <Header />
    {children}
  </div>
)

export default BaseLayout
