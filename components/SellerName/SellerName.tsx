import Icon from "../../shared/Icon"

const SellerName = ({ name = "", className = "" }) => (
  <div className={`flex gap-x-[5px] items-center ${className}`}>
    <Icon name="check" className="text-gray_6" size={16} />
    <p className="text-[14px] text-gray_6 font-[400] tracking-[-0.14px] leading-[120%]">
      {name || "Seller Name"}
    </p>
  </div>
)

export default SellerName
