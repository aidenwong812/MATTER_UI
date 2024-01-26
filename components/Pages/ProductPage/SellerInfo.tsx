import SellerName from "../../SellerName"

const SellerInfo = () => (
  <div className="w-full">
    <div
      className="border-0 md:border md:border-gray_3 rounded-[20px]
        md:p-[24px] bg-white"
    >
      <p
        className="py-[18px] px-[20px] bg-gray_1
            leading-[120%] text-[16px] rounded-[8px]"
      >
        Every seller on Oasis is verified.
      </p>
      <div className="my-[24px] flex flex-col gap-y-[8px]">
        <p className="text-[16px] leading-[120%] font-[400]">About the Seller</p>
        <SellerName />
        <p
          className="tracking-[-0.4px] leading-[100%] tracking-[-0.4px]
                font-[400] text-gray_6"
        >{`{Seller bio}`}</p>
      </div>
      <div className="text-gray_6 font-[400] leading-[120%]">
        Verified on Oasis since 00/00/0000
      </div>
    </div>
  </div>
)

export default SellerInfo
