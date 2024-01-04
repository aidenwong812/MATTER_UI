import { ILayout } from "./types"

const BaseLayout = ({ children }: ILayout) => (
  <div
    className="w-full flex justify-center
      min-h-screen bg-white overflow-hidden"
  >
    {children}
  </div>
)

export default BaseLayout
