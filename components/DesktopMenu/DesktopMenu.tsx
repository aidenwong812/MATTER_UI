import { usePrivy } from "@privy-io/react-auth"
import { useRouter } from "next/router"
import CreateAccountButton from "../CreateAccountButton"
import SignButton from "../SignButton.tsx"
import Icon from "../../shared/Icon"

const DesktopMenu = () => {
  const { authenticated } = usePrivy()
  const router = useRouter()

  return (
    <div
      className="flex gap-x-[32px] items-center justify-end
          flex-grow text-gray_8 text-[16px] cursor-pointer"
    >
      <p>Services</p>
      <p>Digital Items</p>
      <p>Physical Products</p>
      <div className="flex gap-x-[10px]">
        {authenticated && (
          <button type="button" className="ml-[24px]" onClick={() => router.push("/checkout")}>
            <Icon name="cart" />
          </button>
        )}
        <SignButton />
        {!authenticated && <CreateAccountButton />}
      </div>
    </div>
  )
}

export default DesktopMenu
