const TableHead = () => {
  const itemClasses = "text-gray_5 text-[12px] leading-[16px] px-[20px] py-[16px]"
  return (
    <thead className="border-b border-b-gray_1">
      <tr>
        <td className={itemClasses}>Item Name</td>
        <td className={itemClasses}>Date and Time</td>
        <td className={itemClasses}>Traansaction on the Blockchain</td>
        <td className={itemClasses}>Amount</td>
      </tr>
    </thead>
  )
}

export default TableHead
