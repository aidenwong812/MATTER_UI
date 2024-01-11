import { useMemo } from "react"
import { ethers } from "ethers"
import Image from "../../../shared/Image"
import Icon from "../../../shared/Icon"
import Select from "../../../shared/Select"
import useIsMobile from "../../../hooks/useIsMobile"
import { useDropProvider } from "../../../providers/DropProvider"
import { useUserProvider } from "../../../providers/UserProvider"
import { useCheckOut } from "../../../providers/CheckOutProvider"

const CartItem = ({ index }) => {
  const quantites = Array.from({ length: 5 }).map((_, i) => ({
    label: `${i + 1}`,
    value: i + 1,
  }))
  const isMobile = useIsMobile()
  const {
    imageUri,
    animationUri,
    dropName,
    sellerName,
    saleDetails,
    dropAddress,
    canMint,
    tokenId,
    dropContractName,
  } = useDropProvider()
  const { handleSelectedDrop, feed, handleChangeQuantity } = useCheckOut()

  const ethPrice = useMemo(() => {
    if (!saleDetails) return 0
    return ethers.utils.formatUnits(saleDetails?.publicSalePrice.toString(), "ether")
  }, [saleDetails])

  const { getUsdConversion } = useUserProvider()

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      className="border-b border-b-gray_3 py-[24px] hover:bg-gray_3
        transition duration-[300ms]
        w-full flex flex-col md:flex-row md:justify-between cursor-pointer"
      onClick={() =>
        handleSelectedDrop(canMint, dropAddress, tokenId, ethPrice, feed[index].quantity)
      }
    >
      <div className="flex gap-x-[15px] md:gap-x-[10px] pl-[10px]">
        <Image
          link={imageUri || animationUri || "/images/cart_item.png"}
          blurLink={imageUri || animationUri || "/images/cart_item.png"}
          fallbackLink="/images/cart_item.png"
          containerClasses="w-[150px] aspect-[1/1]"
          alt="not found item"
        />
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-[16px] text-black font-[400] tracking-[-0.6px] leading-[100%] pb-[8px]">
              {dropContractName}
            </p>
            <p className="text-[28px] text-black font-[400] tracking-[-0.168px] leading-[120%]">
              {dropName} #{tokenId}
            </p>
          </div>
          <div className="flex gap-x-[5px] items-center">
            <Icon name="check" className="text-gray_6" size={16} />
            <p className="text-[14px] text-gray_6 font-[400] tracking-[-0.14px] leading-[120%]">
              {sellerName}
            </p>
          </div>
          <div>
            <p className="text-[16px] text-black font-[400] tracking-[-0.4px] leading-[100%] pb-[8px]">
              USD ${getUsdConversion(ethPrice)}
            </p>
            <p className="text-[16px] text-black font-[400] tracking-[-0.4px] leading-[100%]">
              ETH {ethPrice || ""}
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
            value={feed[index]?.quantity || ""}
            className="!w-[100px]"
            onChange={(e) => handleChangeQuantity(e.target.value, index)}
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
