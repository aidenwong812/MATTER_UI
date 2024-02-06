import useIsMobile from "../../../../../hooks/useIsMobile"
import truncateEthAddress from "../../../../../lib/truncatedEthAddress"

const TableRow = () => {
  const isMobile = useIsMobile()

  const itemClasses = `md:px-[20px] md:py-[16px] text-gray_7 text-[12px] leading-[16px] p-[10px] border border-gray_1`

  return (
    <tr>
      <td className={itemClasses}>
        {isMobile ? (
          <>
            00/00/0000
            <br />
            00:00:PM
            <br />
            EST
          </>
        ) : (
          "00/00/0000 00:00:PM EST"
        )}
      </td>
      <td className={itemClasses}>
        {isMobile ? (
          <>
            0.000 <br /> USDT
          </>
        ) : (
          "0.000 USDT"
        )}
      </td>
      <td className={`${itemClasses} !text-link`}>
        {isMobile
          ? truncateEthAddress("0xaeff3fb58a4e4d8803373c1383a27f7fcd4ef4603ca11f0ca74633c06802714c")
          : "0xaeff3fb58a4e4d8803373c1383a27f7fcd4ef4603ca11f0ca74633c06802714c"}
      </td>
      <td className={itemClasses}>
        <p className="text-[12px] leading-[16px]">Successful</p>
      </td>
    </tr>
  )
}

export default TableRow
