const TableRow = () => {
  const itemClasses = "px-[20px] py-[16px] text-gray_7 text-[12px] leading-[16px]"

  return (
    <tr className="border-b border-b-gray_1">
      <td className={itemClasses}>Item Naming</td>
      <td className={itemClasses}>00/00/0000 00:00:PM EST</td>
      <td className={`${itemClasses} !text-link`}>
        0xaeff3fb58a4e4d8803373c1383a27f7fcd4ef4603ca11f0ca74633c06802714c
      </td>
      <td className={itemClasses}>0.000 USDT</td>
    </tr>
  )
}

export default TableRow
