const TableHead = () => {
  const itemClasses = "text-gray_5 text-[12px] leading-[16px] md:px-[20px] md:py-[16px] p-[10px]"
  return (
    <thead className="border-b border-b-gray_1">
      <tr>
        <td className={itemClasses}>Item Name</td>
        <td className={itemClasses}>Date and Time</td>
        <td className={itemClasses}>Transaction on the Blockchain</td>
        <td className={itemClasses}>Shipping Address</td>
        <td className={itemClasses}>Amount</td>
      </tr>
    </thead>
  )
}

export default TableHead
