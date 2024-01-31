import { usePrivy } from "@privy-io/react-auth"
import { toast } from "react-toastify"
import { useProduct } from "../../../providers/ProductProvider"

const CartButton = () => {
  const { addCart, loading } = useProduct()
  const { authenticated, login } = usePrivy()

  const handleClick = async () => {
    if (authenticated) {
      await addCart()
      toast.success("Added to cart.")
      return
    }
    login()
  }

  return (
    <div className="w-full">
      <div
        className="flex flex-col items-center border-0 md:border md:border-gray_3 rounded-[20px]
            md:px-[24px] py-[32px] bg-white"
      >
        <button
          type="button"
          className="w-full xl:w-[327px] h-[56px] bg-black rounded-full
            flex gap-x-[10px] items-center justify-center"
          onClick={handleClick}
          disabled={loading}
        >
          <p className="text-white text-[16px] font-[400] leading-[120%]">Add To Cart</p>
        </button>{" "}
      </div>
    </div>
  )
}

export default CartButton
