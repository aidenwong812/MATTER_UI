import useIsMobile from "../../../hooks/useIsMobile"
import { useCheckOut } from "../../../providers/CheckOutProvider"
import Icon from "../../../shared/Icon"
import CartItem from "./CartItem"

const CartList = () => {
  const isMobile = useIsMobile()
  const { liveCart } = useCheckOut()

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
        className="w-full flex flex-col
              px-[20px] md:px-0 border-t border-t-gray_3"
      >
        {liveCart.map((cartData, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <CartItem key={i} data={cartData} cartId={cartData?.id} />
        ))}
      </div>
    </div>
  )
}

export default CartList
