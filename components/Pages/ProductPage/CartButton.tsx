import { useProduct } from "../../../providers/ProductProvider"
import Image from "../../../shared/Image"

const CartButton = () => {
  const { addCart, loading } = useProduct()

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
          onClick={addCart}
          disabled={loading}
        >
          <Image
            link="/images/matter_mini_logo.svg"
            blurLink="/images/matter_mini_logo.png"
            containerClasses="w-[19px] h-[14px]"
            alt="not found icon"
          />
          <p className="text-white text-[16px] font-[400] leading-[120%]">Add To Cart</p>
        </button>{" "}
      </div>
    </div>
  )
}

export default CartButton
