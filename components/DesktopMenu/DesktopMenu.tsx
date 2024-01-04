import SignButton from "../SignButton.tsx"

const DesktopMenu = () => (
  <div
    className="flex gap-x-[32px] items-center justify-end
        flex-grow text-gray_8 text-[16px] cursor-pointer"
  >
    <p>Services</p>
    <p>Digital Items</p>
    <p>Physical Products</p>
    <SignButton />
  </div>
)

export default DesktopMenu
