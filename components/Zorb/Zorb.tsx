import { useMemo } from "react"
import { zorbImageDataURI } from "@zoralabs/zorb"
import Image from "next/image"
import useConnectedWallet from "../../hooks/useConnectedWallet"

const Zorb = ({ address = "", size = 50 }) => {
  const { connectedWallet } = useConnectedWallet()

  const zorbImage = useMemo(
    () => zorbImageDataURI(address || connectedWallet),
    [address, connectedWallet],
  )
  return <Image alt="zorb" height={size} width={size} src={zorbImage} />
}

export default Zorb
