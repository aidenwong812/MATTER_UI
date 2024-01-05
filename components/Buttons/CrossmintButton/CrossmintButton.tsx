import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui"
import { FC } from "react"
import { ethers } from "ethers"

import {
  ERC6551_IMPLEMENTATION_ADDRESS,
  ERC6551_INIT_DATA,
  ERC6551_REGISTRY_ADDRESS,
} from "../../../lib/consts"

interface CrossmintButtonProps {
  wallet: string
  quantity: number
  price: number
}

const CrossmintButton: FC<CrossmintButtonProps> = ({ wallet, quantity, price }) => {
  const mintConfig = {
    type: "erc-721",
    totalPrice: ethers.utils.formatEther(price),
    quantity,
    _target: process.env.NEXT_PUBLIC_DROP_CONTRACT,
    _quantity: quantity,
    _to: wallet,
    to: wallet,
    _registry: ERC6551_REGISTRY_ADDRESS,
    _implementation: ERC6551_IMPLEMENTATION_ADDRESS,
    _initData: ERC6551_INIT_DATA,
  }

  return (
    <CrossmintPayButton
      projectId={process.env.NEXT_PUBLIC_CROSSMINT_PROJECT_ID}
      collectionId={process.env.NEXT_PUBLIC_CROSSMINT_COLLECTION_ID}
      environment="staging"
      getButtonText={(connecting) => (connecting ? "Connecting" : `Pay with Credit or Debit`)}
      mintConfig={mintConfig}
      paymentMethod="fiat"
      className="oasis-crossmint-button"
      mintTo={wallet}
      successCallbackURL={
        typeof window !== "undefined" && `${window.location.origin}/checkout/success`
      }
    />
  )
}

export default CrossmintButton
