import SellerName from "../../SellerName"

const ProductDetail = () => (
  <div className="col-span-3 py-[35px] px-[24px]">
    <p className="text-[16px] font-[400] leading-[100%] tracking-[-0.4px]">Category</p>
    <p className="text-[28px] tracking-[-0.168px] font-[400] leading-[120%]">Item Name</p>
    <SellerName className="my-[16px]" />
    <p className="text-[16px] leading-[100%] tracking-[-0.4px] font-[400] mb-[4px]">US $000</p>
    <p className="text-[16px] leading-[100%] tracking-[-0.4px] font-[400]">ETH 0.000</p>
    <p className="text-[16px] font-[400] leading-[150%] tracking-[-0.384px] mt-[30px]">
      Description of item lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
      consectetur mi, id fermentum turpis sollicitudin sed. Nulla facilisi. Fusce non bibendum
      nulla. Maecenas vehicula.
    </p>
  </div>
)

export default ProductDetail
