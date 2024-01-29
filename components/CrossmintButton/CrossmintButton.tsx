import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui"
import { ethers } from "ethers"
import { useCheckOut } from "../../providers/CheckOutProvider"
import useConnectedWallet from "../../hooks/useConnectedWallet"
import getMulticallFromCart from "../../lib/getMulticallFromCart"
import getMintData from "../../lib/zora/getMintData"

const CrossmintButton = ({ buttonLabel = "Pay with Credit or Debit" }) => {
  const { connectedWallet } = useConnectedWallet()
  const { cart, totalPrice } = useCheckOut()
  const multicalls = getMulticallFromCart(cart, getMintData(connectedWallet))
  const totalPriceEth = ethers.utils.formatEther(totalPrice)

  const mintConfig = {
    type: "erc-721",
    totalPrice: totalPriceEth,
    quantity: 1,
    cart: multicalls,
    to: connectedWallet,
  }

  return (
    <CrossmintPayButton
      projectId={process.env.NEXT_PUBLIC_CROSSMINT_PROJECT_ID}
      collectionId={process.env.NEXT_PUBLIC_CROSSMINT_COLLECTION_ID}
      environment="staging"
      getButtonText={(connecting) => (connecting ? "Connecting" : buttonLabel)}
      mintConfig={mintConfig}
      paymentMethod="fiat"
      className="matter-crossmint-button"
      mintTo={connectedWallet}
      successCallbackURL={
        typeof window !== "undefined" && `${window.location.origin}/checkout/success`
      }
    />
  )
}

export default CrossmintButton
