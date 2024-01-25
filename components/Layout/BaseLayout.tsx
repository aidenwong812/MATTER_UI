import Header from "../Header"
import { ILayout } from "./types"

const BaseLayout = ({ children }: ILayout) => (
  <div
    className="w-full flex justify-center bg-gray_1
      min-h-screen overflow-hidden"
  >
    <Header />
    {children}
  </div>
)

export default BaseLayout
