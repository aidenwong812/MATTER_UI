import { useConnectModal } from "@rainbow-me/rainbowkit"
import Button from "../../../shared/Button"
import { useEthersSigner } from "../../../hooks/useEthersSigner"
import { useDistributeProvider } from "../../../providers/DistributeProvider"

const DistributeButton = () => {
  const signer = useEthersSigner()
  const { openConnectModal } = useConnectModal()
  const { distribute } = useDistributeProvider()

  const handleClick = async () => {
    if (!signer) {
      openConnectModal()
      return
    }

    await distribute()
  }

  return (
    <Button
      id="invest_amount_btn"
      className="w-full rounded-full
                py-4
                text-white
                font-chivo_bold font-poppins_bold
                text-[18px] md:text-[19.2px] lg:text-[25.6px] xl:text-[32px]
                bg-gradient-to-b
                from-[#34B5D1] to-[#2A82AF]
                capitalize"
      onClick={handleClick}
    >
      Distribute
    </Button>
  )
}

export default DistributeButton
