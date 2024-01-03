import { useRouter } from "next/router"
import useUsdcTransfer from "../../../hooks/erc6551/useUsdcTransfer"
import useEthTransfer from "../../../hooks/erc6551/useEthTransfer"
import { useDashboardProvider } from "../../../providers/DashboardProvider"

const AvailableRewards = () => {
  const { availableRewards, smartWallets, tokenIds, balance } = useDashboardProvider()
  const { transferUsdcFromERC6551Account } = useUsdcTransfer()
  const { transferEthFromERC6551Account } = useEthTransfer()
  const { reload } = useRouter()

  const hasClaimableUsdc = availableRewards > 0
  const hasClaimableEth = balance > 0
  const usdDisplayValue = `$${availableRewards?.toFixed?.(2)}`
  const ethDisplayValue = `${balance}Ξ`
  const defaultValue = `$0`
  const hasValue = hasClaimableUsdc || hasClaimableEth
  const nonZero = hasClaimableUsdc ? usdDisplayValue : ethDisplayValue
  const displayValue = hasValue ? nonZero : defaultValue

  const handleClick = async () => {
    if (hasClaimableUsdc) {
      await transferUsdcFromERC6551Account(smartWallets[0], availableRewards, tokenIds[0])
    }
    if (hasClaimableEth) {
      await transferEthFromERC6551Account(smartWallets[0], balance, tokenIds[0])
    }
    if (hasValue) {
      reload()
    }
  }

  return (
    <button type="button" onClick={handleClick}>
      <p
        className="font-poppins_bold
        md:text-[19.2px] lg:text-[25.6px] xl:text-[32px]
        text-[14px]"
      >
        {displayValue}
      </p>

      <p
        className="font-poppins_medium 
        text-[6px] md:text-[7.2px] lg:text-[9.6px] xl:text-[12px]"
      >
        available rewards to claim{" "}
      </p>
    </button>
  )
}

export default AvailableRewards
