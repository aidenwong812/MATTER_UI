import CrossmintButton from "../../CrossmintButton"
import Icon from "../../../shared/Icon"
import useIsMobile from "../../../hooks/useIsMobile"
import useConnectedWallet from "../../../hooks/useConnectedWallet"
import CollectDropButton from "../../CollectDropButton"
import { useCheckOut } from "../../../providers/CheckOutProvider"

const CheckOutCard = () => {
  const { connectedWallet } = useConnectedWallet()
  const isMobile = useIsMobile()
  const { totalPrice, selectedDrop } = useCheckOut()

  return (
    <div className="md:col-span-6 xl:col-span-4">
      <div
        className="border-0 md:border md:border-gray_3 rounded-[20px]
            px-[24px] py-[32px]"
      >
        {isMobile && (
          <div className="flex justify-center pb-[24px]">
            <Icon name="cart" className="text-gray_5" size={30} />
          </div>
        )}
        <p
          className="text-[16px] leading-[100%] tracking-[-0.4px] font-[400] pb-[8px]
        text-center md:text-left"
        >
          Cart Total
        </p>
        <p
          className="text-[28px] leading-[120%] tracking-[-0.168px] font-[400] font-bold mb-[20px]
        text-center md:text-left"
        >
          ${Number(totalPrice).toFixed(4)}
        </p>
        <div className="flex flex-col items-center">
          <CollectDropButton />
          <p
            className="text-black text-[16px] font-[400] leading-[150%] tracking-[-0.684px]
            text-center my-[20px]"
          >
            Or
          </p>
          <CrossmintButton
            wallet={connectedWallet}
            price={Number(totalPrice).toFixed(4)}
            quantity={selectedDrop?.quantity}
            dropAddress={selectedDrop?.dropAddress}
          />
        </div>
      </div>
    </div>
  )
}

export default CheckOutCard
