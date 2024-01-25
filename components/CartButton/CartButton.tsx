import { useRouter } from "next/router"
import Image from "../../shared/Image"

const CartButton = () => {
  const { push } = useRouter()

  return (
    <button type="button" className="ml-[24px]" onClick={() => push("/checkout")}>
      <Image
        link="/images/cart-shopping-regular.svg"
        blurLink="/images/cart-shopping-regular.png"
        containerClasses="w-[24px] aspect-[24/21]"
        alt="not found icon"
      />
    </button>
  )
}

export default CartButton
