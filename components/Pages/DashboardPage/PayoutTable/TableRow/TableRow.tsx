import useIsMobile from "../../../../../hooks/useIsMobile"
import truncateEthAddress from "../../../../../lib/truncatedEthAddress"

const TableRow = (props) => {
  const isMobile = useIsMobile()

  const itemClasses = `md:px-[20px] md:py-[16px] text-gray_7 text-[12px] leading-[16px] p-[10px] border border-gray_1`

  const connectedAtTimestamp = props?.wallet?.connectedAt

  const amount = props?.wallet?.fund
  
  const connectedWallet = props?.wallet?.address  

  function formatDate(dateString: any): string {
    const date = new Date(dateString)
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hourCycle: "h23", // Use PM instead of AM
      hour12: true,
      timeZoneName: "short", // Abbreviated Time Zone Name
    }
    return date.toLocaleString("en-US", options)
  }

  const connectedAt = formatDate(connectedAtTimestamp)

  const isConnected = props?.wallet?.isConnected() ?? false;
  console.log("isConnected",isConnected)
  const connectedDate = connectedAt.split(",")[0];

  const connectedTime = connectedAt.split(",")[1].split(" ")[1];

  const connectedTimezone = connectedAt.split(",")[1].split(" ")[2]

  return (
    <tr>
      <td className={itemClasses}>
        {isMobile ? (
          <>
            {connectedDate}
            <br />
            {connectedTime}
            <br />
            {connectedTimezone}
          </>
        ) : (
          // "00/0011/0000 00:00:PM EST"
          connectedAt
        )}
      </td>
      <td className={itemClasses}>
        {isMobile ? (
          <>
            0.000 <br /> USDT
          </>
        ) : (
          // "0.000 USDT"
          amount
        )}
      </td>
      <td className={`${itemClasses} !text-link`}>
        {isMobile ? truncateEthAddress(connectedWallet) : connectedWallet}
      </td>
      <td className={itemClasses}>
        <p className="text-[12px] leading-[16px]">{ !isConnected ? "failed" : "Successfully"}</p>
      </td>
    </tr>
  )
}

export default TableRow
