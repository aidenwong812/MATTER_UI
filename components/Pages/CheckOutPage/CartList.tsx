import useIsMobile from "../../../hooks/useIsMobile"
import Icon from "../../../shared/Icon"
import CartItem from "./CartItem"
import { demoProducts } from "./demoProducts"

const CartList = () => {
  const isMobile = useIsMobile()

  return (
    <div className="md:col-span-6 xl:col-span-8">
      {!isMobile && (
        <div className="flex gap-x-[10px] items-center pb-[30px]">
          <Icon name="cart" size={25} className="text-gray_5" />
          <p
            className="text-black text-[28px] tracking-[-0.7px]
                  font-[400] leading-[110%]"
          >
            Cart
          </p>
        </div>
      )}
      <div
        className="w-full flex flex-col gap-y-[24px]
              px-[20px] md:px-0 border-t border-t-gray_3 pt-[24px]"
      >
        {Array(3)
          .fill("0")
          .map((_, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <CartItem key={i} product={demoProducts[i]} />
          ))}
      </div>
    </div>
  )
}

export default CartList
