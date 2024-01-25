import { usePrivy } from "@privy-io/react-auth"
import CreateAccountButton from "../CreateAccountButton"
import SignButton from "../SignButton"
import CartButton from "../CartButton"
import EditAccountButton from "../EditAccountButton"

const DesktopMenu = () => {
  const { authenticated } = usePrivy()
  return (
    <div
      className="flex gap-x-[32px] items-center justify-end
          flex-grow text-gray_8 text-[16px] cursor-pointer"
    >
      <p>Services</p>
      <p>Digital Items</p>
      <p>Physical Products</p>
      <div className="flex gap-x-[10px]">
        {authenticated ? (
          <>
            <CartButton />
            <EditAccountButton />
          </>
        ) : (
          <>
            <SignButton />
            <CreateAccountButton />
          </>
        )}
      </div>
    </div>
  )
}

export default DesktopMenu
