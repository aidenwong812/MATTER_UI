import { useState } from "react"
import Image from "../../../shared/Image"
import Icon from "../../../shared/Icon"
import Select from "../../../shared/Select"

const CartItem = () => {
  const [quantity, setQuanity] = useState("1")
  const quantites = Array.from({ length: 5 }).map((_, index) => ({
    label: `${index + 1}`,
    value: `${index + 1}`,
  }))

  return (
    <div
      className="border-b border-b-gray_3 pb-[24px]
        w-full flex justify-between"
    >
      <div className="flex gap-x-[10px]">
        <Image
          link="/images/cart_item.png"
          blurLink="/images/cart_item.png"
          containerClasses="w-[150px] aspect-[1/1]"
          alt="not found item"
        />
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-[16px] text-black font-[400] tracking-[-0.6px] leading-[100%] pb-[8px]">
              Category
            </p>
            <p className="text-[28px] text-black font-[400] tracking-[-0.168px] leading-[120%]">
              Item Name
            </p>
          </div>
          <div className="flex gap-x-[5px] items-center">
            <Icon name="check" className="text-gray_6" size={16} />
            <p className="text-[14px] text-gray_6 font-[400] tracking-[-0.14px] leading-[120%]">
              Seller Name
            </p>
          </div>
          <div>
            <p className="text-[16px] text-black font-[400] tracking-[-0.4px] leading-[100%] pb-[8px]">
              US $00
            </p>
            <p className="text-[16px] text-black font-[400] tracking-[-0.4px] leading-[100%]">
              ETH 0.000
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-around">
        <div className="flex flex-col gap-y-[5px]">
          <p className="text-gray_6 text-[12px] tracking-[-0.3px] font-[400] leading-[100%] text-[12px]">
            QTY
          </p>
          <Select
            id="qantity"
            name="qantity"
            value={quantity || ""}
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
