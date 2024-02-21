import useProductImage from "@/hooks/useProductImage"
import getProductSeller from "@/lib/getProductSeller"
import { useDashboard } from "@/providers/DashboardProvider"
import Image from "@/shared/Image"

const TableRow = ({ data }) => {
  const { imageUrl } = useProductImage(data?.cover)
  const itemClasses = `md:px-[20px] md:py-[16px] text-gray_7 text-[12px] leading-[16px] p-[10px] border border-gray_1`
  const { removeListing } = useDashboard()

  return (
    <tr>
      <td>
        <Image
          alt="not found photo"
          link={imageUrl || "/images/product_placeholder.png"}
          blurLink={imageUrl || "/images/product_placeholder.png"}
          containerClasses="w-[30px] aspect-[1/1] md:aspect-[1/1]"
          imageClasses="!object-cover"
        />
      </td>
      <td className={itemClasses}>{data.productName}</td>
      <td className={itemClasses}>{getProductSeller(data)}</td>
      <td className={itemClasses}>{data.priceInUsd}</td>
      <td className={`${itemClasses}`}>
        <button type="button" onClick={() => removeListing(data.id)}>
          Remove
        </button>
      </td>
    </tr>
  )
}

export default TableRow
