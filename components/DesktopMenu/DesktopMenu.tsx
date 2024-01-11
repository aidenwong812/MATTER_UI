import { usePrivy } from "@privy-io/react-auth"
import { useRouter } from "next/router"
import CreateAccountButton from "../CreateAccountButton"
import SignButton from "../SignButton.tsx"
import Image from "../../shared/Image"

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
            <Image
              link="/images/cart-shopping-regular.svg"
              blurLink="/images/cart-shopping-regular.png"
              containerClasses="w-[24px] aspect-[24/21]"
              alt="not found icon"
            />
          </button>
        )}
        <SignButton />
        {!authenticated && <CreateAccountButton />}
      </div>
    </div>
  )
}

export default DesktopMenu
