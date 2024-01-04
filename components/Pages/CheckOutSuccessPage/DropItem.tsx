import Image from "../../../shared/Image"
import Icon from "../../../shared/Icon"
import useIsMobile from "../../../hooks/useIsMobile"

const DropItem = () => {
  const isMobile = useIsMobile()

  return (
    <div
      className="border-b border-b-gray_3 pb-[24px] px-[20px] md:px-0
        w-full flex flex-col md:flex-row md:justify-between"
    >
      <div className="flex gap-x-[15px] md:gap-x-[10px] items-center">
        <Image
          link="/images/cart_item.png"
          blurLink="/images/cart_item.png"
          containerClasses="w-[150px] aspect-[1/1]"
          alt="not found item"
        />
        <div className="flex flex-col gap-y-[30px]">
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
      md:items-end md:flex-col md:justify-around"
      >
        <div className="flex flex-col gap-y-[5px]">
          {!isMobile && (
            <p className="text-gray_6 text-[12px] tracking-[-0.3px] font-[400] leading-[100%] text-[12px]">
              QTY
            </p>
          )}
          <div
            className="rounded-[0.5rem] border border-gray_3
          placeholder:text-gray_3 text-black w-[100px] px-[10px] py-[10px]"
          >
            1
          </div>
        </div>
      </div>
    </div>
  )
}

export default DropItem
