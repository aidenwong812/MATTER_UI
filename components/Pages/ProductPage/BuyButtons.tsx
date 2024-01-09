import CrossmintButton from "../../CrossmintButton"
import useConnectedWallet from "../../../hooks/useConnectedWallet"
import CollectDropButton from "../../CollectDropButton"

const BuyButtons = () => {
  const { connectedWallet } = useConnectedWallet()

  return (
    <div className="w-full">
      <div
        className="flex flex-col items-center border-0 md:border md:border-gray_3 rounded-[20px]
            px-[24px] py-[32px]"
      >
        <CollectDropButton buttonLabel="Buy With Crypto" />
        <p
          className="text-black text-[16px] font-[400] leading-[150%] tracking-[-0.684px]
            text-center my-[20px]"
        >
          Or
        </p>
        <CrossmintButton
          wallet={connectedWallet}
          price={Number("0.356").toFixed(4)}
          quantity={2}
          dropAddress=""
          buttonLabel="Buy with Credit or Debit"
        />
      </div>
    </div>
  )
}

export default BuyButtons
