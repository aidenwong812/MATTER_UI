import { formatEther } from "ethers/lib/utils"
import useIsMobile from "@/hooks/useIsMobile"
import truncateEthAddress from "@/lib/truncatedEthAddress"
import { IS_TESTNET } from "@/lib/consts"

const TableRow = ({ transaction }) => {
  const isMobile = useIsMobile()

  const itemClasses = `md:px-[20px] md:py-[16px] text-gray_7 text-[12px] leading-[16px] p-[10px] border border-gray_1`

  const blockTimestamp = transaction?.metadata.blockTimestamp
  const amount = parseFloat(formatEther(transaction?.rawContract.value ?? 0)).toFixed(2)
  const hash = transaction?.hash
  const explorer = IS_TESTNET
    ? `https://goerli-optimism.etherscan.io/tx/${hash}`
    : `https://basescan.org/tx/${hash}`

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

  const timestamp = formatDate(blockTimestamp)
  const timestampDate = timestamp.split(",")[0]
  const timestampTime = timestamp.split(",")[1].split(" ")[1]
  const timestampZone = timestamp.split(",")[1].split(" ")[2]

  return (
    <tr>
      <td className={itemClasses}>
        {isMobile ? (
          <>
            {timestampDate}
            <br />
            {timestampTime}
            <br />
            {timestampZone}
          </>
        ) : (
          timestamp
        )}
      </td>
      <td className={itemClasses}>
        {isMobile ? (
          <>
            {amount} <br /> USDC
          </>
        ) : (
          `${amount} USDC`
        )}
      </td>
      <td className={`${itemClasses} !text-link`}>
        <a target="_blank" href={explorer} rel="noreferrer">
          {isMobile ? truncateEthAddress(hash) : hash}
        </a>
      </td>
      <td className={itemClasses}>
        <p className="text-[12px] leading-[16px]">Successful</p>
      </td>
    </tr>
  )
}

export default TableRow
