import { useState } from "react"
import { formatEther } from "viem"
import Image from "../../../shared/Image"
import Icon from "../../../shared/Icon"
import Select from "../../../shared/Select"
import useIsMobile from "../../../hooks/useIsMobile"
import { useEthPrice } from "../../../providers/EthPriceProvider"

const CartItem = ({ product = null }: any) => {
  const { getUsdConversion } = useEthPrice()
  const [quantity, setQuanity] = useState("1")
  const quantites = Array.from({ length: 5 }).map((_, index) => ({
    label: `${index + 1}`,
    value: `${index + 1}`,
  }))
  const isMobile = useIsMobile()
  const ethPrice = formatEther(product.price).toString()

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      className="border-b border-b-gray_3 py-[24px] hover:bg-gray_3
        transition duration-[300ms]
        w-full flex flex-col md:flex-row md:justify-between cursor-pointer"
    >
      <div className="flex gap-x-[15px] md:gap-x-[10px] pl-[10px]">
        <Image
          link={product.image || "/images/cart_item.png"}
          blurLink={product.image || "/images/cart_item.png"}
          containerClasses="w-[150px] aspect-[1/1]"
          alt="not found item"
        />
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-[16px] text-black font-[400] tracking-[-0.6px] leading-[100%] pb-[8px]">
              {product.title || "Item Name"}
            </p>
            <p className="text-[28px] text-black font-[400] tracking-[-0.168px] leading-[120%]">
              {product.title || "Item Name"}
            </p>
          </div>
          <div className="flex gap-x-[5px] items-center">
            <Icon name="check" className="text-gray_6" size={16} />
            <p className="text-[14px] text-gray_6 font-[400] tracking-[-0.14px] leading-[120%]">
              {product.sellerName || "Seller Name"}
            </p>
          </div>
          <div>
            <p className="text-[16px] text-black font-[400] tracking-[-0.4px] leading-[100%] pb-[8px]">
              US ${getUsdConversion(ethPrice) || "00"}
            </p>
            <p className="text-[16px] text-black font-[400] tracking-[-0.4px] leading-[100%]">
              ETH {ethPrice || "0.000"}
            </p>
          </div>
        </div>
      </div>
      {isMobile && (
        <p
          className="text-gray_6 text-[12px] tracking-[-0.3px] font-[400] leading-[100%] text-[12px] 
      mb-[8px] mt-[16px]"
        >
          QTY
        </p>
      )}
      <div
        className="flex flex-row items-center gap-x-[10px] 
      md:items-end md:flex-col md:justify-around pr-[10px]"
      >
        <div className="flex flex-col gap-y-[5px]">
          {!isMobile && (
            <p className="text-gray_6 text-[12px] tracking-[-0.3px] font-[400] leading-[100%] text-[12px]">
              QTY
            </p>
          )}
          <Select
            id="qantity"
            name="qantity"
            value={quantity}
            className="!w-[100px]"
            onChange={(e) => setQuanity(e.target.value)}
            options={quantites}
          />
        </div>
        <button
          type="button"
          className="text-link text-[16px] font-hedvig tracking-[-0.4px] leading-[100%] font-[400]"
        >
          Remove
        </button>
      </div>
    </div>
  )
}

export default CartItem
