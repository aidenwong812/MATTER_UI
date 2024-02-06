import useIsMobile from "../../../../../hooks/useIsMobile"

const TableHead = () => {
  const isMobile = useIsMobile()
  const itemClasses = "text-gray_5 text-[12px] leading-[16px] md:px-[20px] md:py-[16px] p-[10px]"
  return (
    <thead className="border-b border-b-gray_1">
      <tr>
        <td className={itemClasses}>Date and Time</td>
        <td className={itemClasses}>Amount</td>
        <td className={itemClasses}>
          {isMobile ? (
            <>
              Transaction <br /> on the Blockchain
            </>
          ) : (
            "Transaction on the Blockchain"
          )}
        </td>
        <td className={itemClasses}>Status</td>
      </tr>
    </thead>
  )
}

export default TableHead
