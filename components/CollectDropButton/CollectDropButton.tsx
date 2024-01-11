import useCollectDrop from "../../hooks/useCollectDrop"
import Image from "../../shared/Image"

const CollectDropButton = ({ className = "", buttonLabel = "", selectedDrop = null }) => {
  const { collectDrop } = useCollectDrop(selectedDrop?.dropAddress, selectedDrop?.tokenId)

  return (
    <button
      type="button"
      className={`w-[327px] h-[56px] bg-black rounded-full
        flex gap-x-[10px] items-center justify-center ${className}`}
      onClick={async () => {
        await collectDrop("OASIS", selectedDrop?.quantity)
      }}
      disabled={!selectedDrop?.canMint}
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
