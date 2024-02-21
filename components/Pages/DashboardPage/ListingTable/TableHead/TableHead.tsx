const TableHead = () => {
  const itemClasses = "text-gray_5 text-[12px] leading-[16px] md:px-[20px] md:py-[16px] p-[10px]"
  return (
    <thead className="border-b border-b-gray_1">
      <tr>
        <td className={itemClasses}>{` `}</td>
        <td className={itemClasses}>Product Name</td>
        <td className={itemClasses}>Business Name</td>
        <td className={itemClasses}>Price(USD)</td>
        <td className={itemClasses}>Actions</td>
      </tr>
    </thead>
  )
}

export default TableHead
