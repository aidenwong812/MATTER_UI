import { FC } from "react"
import useCollectDrop from "../../hooks/useCollectDrop"
import { useCheckOut } from "../../providers/CheckOutProvider"
import Image from "../../shared/Image"

interface CollectDropButtonProps {
  className?: string
  disabled?: boolean
}

const CollectDropButton: FC<CollectDropButtonProps> = ({ className = "", disabled }) => {
  const { selectedDrop } = useCheckOut()

  const { collectDrop } = useCollectDrop(selectedDrop?.contractAddress)

  return (
    <button
      type="button"
      className={`w-[327px] h-[56px] bg-black rounded-full
        flex gap-x-[10px] items-center justify-center ${className}`}
      onClick={async () => {
        await collectDrop()
      }}
      disabled={disabled}
    >
      <Image
        link="/images/privy_pay.svg"
        blurLink="/images/privy_pay.png"
        containerClasses="w-[18px] h-[14px]"
        alt="not found icon"
      />
      <p className="text-white text-[16px] font-[400] leading-[120%]">Pay with Crypto</p>
    </button>
  )
}

export default CollectDropButton
