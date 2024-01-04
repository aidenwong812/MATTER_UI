import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui"
import { FC } from "react"
import {
  ERC6551_IMPLEMENTATION_ADDRESS,
  ERC6551_INIT_DATA,
  ERC6551_REGISTRY_ADDRESS,
} from "../../../lib/consts"

interface CrossmintButtonProps {
  wallet: string
  quantity: number
}

const CrossmintButton: FC<CrossmintButtonProps> = ({ wallet, quantity }) => {
  const mintConfig = {
    type: "erc-721",
    totalPrice: "0.000001", // 0.000001 eth
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
      mintConfig={mintConfig}
      className="w-full rounded-full
                 py-4
                 text-white
                 font-chivo_bold font-poppins_bold
                 text-[18px] md:text-[19.2px] lg:text-[25.6px] xl:text-[32px]
                 bg-gradient-to-b
                 from-[#34B5D1] to-[#2A82AF]
                 capitalize"
      mintTo={wallet}
    />
  )
}

export default CrossmintButton
