import { FC } from "react"
import useCollectDrop from "../../hooks/useCollectDrop"
import Image from "../../shared/Image"

interface CollectDropButtonProps {
  className?: string
  disabled?: boolean
  selectedDrop?: any
  buttonLabel?: string
}

const CollectDropButton: FC<CollectDropButtonProps> = ({
  className = "",
  disabled,
  selectedDrop,
  buttonLabel,
}) => {
  const { collectDrop } = useCollectDrop(selectedDrop?.dropAddress)

  return (
    <button
      type="button"
      className={`w-[327px] h-[56px] bg-black rounded-full
        flex gap-x-[10px] items-center justify-center ${className}`}
      onClick={async () => {
        await collectDrop("OASIS", selectedDrop?.quantity)
      }}
      disabled={disabled}
    >
      <Image
        link="/images/privy_pay.svg"
        blurLink="/images/privy_pay.png"
        containerClasses="w-[18px] h-[14px]"
        alt="not found icon"
      />
      <p className="text-white text-[16px] font-[400] leading-[120%]">
        {buttonLabel || "Pay with Crypto"}
      </p>
    </button>
  )
}

export default CollectDropButton
