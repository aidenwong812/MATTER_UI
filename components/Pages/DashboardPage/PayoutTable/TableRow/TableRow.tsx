import useIsMobile from "../../../../../hooks/useIsMobile"
import truncateEthAddress from "../../../../../lib/truncatedEthAddress"


const TableRow = (props) => {
  const isMobile = useIsMobile()

  const itemClasses = `md:px-[20px] md:py-[16px] text-gray_7 text-[12px] leading-[16px] p-[10px] border border-gray_1`
  
  const connectedWallet = props.wallet?.address
  
  const connectedAtTimestamp = props.wallet?.connectedAt

  function formatDate(dateString: any, isMobile: boolean): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hourCycle: 'h23', // Use PM instead of AM
      timeZoneName: 'short', // Abbreviated Time Zone Name
    };
    return date.toLocaleString('en-US', options);
  }
  
  const  connectedAt = formatDate(connectedAtTimestamp, isMobile);

  const isConnected = props.wallet?.isConnected;
  
  return (
    <tr>
      <td className={itemClasses}>
        {isMobile ? (
          <>
            {connectedAt}
            <br />
            00:00:PM
            <br />
            EST
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
          "0.000 USDT"
        )}
      </td>
      <td className={`${itemClasses} !text-link`}>
        {isMobile
          ? truncateEthAddress(connectedWallet)
          : connectedWallet}
      </td>
      <td className={itemClasses}>
        <p className="text-[12px] leading-[16px]">
          {isConnected ? "Successfully" : "failed"}
        </p>
      </td>
    </tr>
  )
}

export default TableRow
