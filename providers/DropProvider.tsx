import { createContext, useContext, useState, useMemo, useEffect } from "react"
import { Contract } from "ethers"
import getDefaultProvider from "../lib/getDefaultProvider"
import abi from "../lib/abi/abi-ERC721Drop.json"
import getIpfsLink from "../lib/getIpfsLink"
import metadataAbi from "../lib/abi/abi-EditionMetadataRenderer.json"
import { CHAIN_ID } from "../lib/consts"
import getEnsForAddress from "../lib/getEnsForAddress"
import truncateAddress from "../lib"

const DropContext = createContext(null)

const DropProvider = ({ children, drop }) => {
  const { uri, contractAddress: dropAddress, type, tokenId } = drop
  const [imageUri, setImageUri] = useState("")
  const [animationUri, setAnimationUri] = useState("")
  const [fundsRecipient, setFundsRecipient] = useState("")
  const [sellerName, setSellerName] = useState("")
  const [dropName, setDropName] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [saleDetails, setSaleDetail] = useState(null)

  const tokenContract = useMemo(() => {
    return new Contract(dropAddress, abi, getDefaultProvider(CHAIN_ID))
  }, [dropAddress])

  useEffect(() => {
    const init = async () => {
      setIsLoading(true)
      const saleDetails = await tokenContract.saleDetails()
      setSaleDetail(saleDetails)
      const config = await tokenContract.config()
      const ensAddress = await getEnsForAddress(config.fundsRecipient)
      setFundsRecipient(config.fundsRecipient)
      setSellerName(ensAddress || truncateAddress(config.fundsRecipient))
      const name = await tokenContract.name()
      const metadataRenderer = await tokenContract.metadataRenderer()
      const metadataRendererContract = new Contract(
        metadataRenderer,
        metadataAbi,
        getDefaultProvider(CHAIN_ID),
      )
      const URI = await metadataRendererContract.tokenInfos(dropAddress)
      setImageUri(getIpfsLink(URI.imageURI))
      setAnimationUri(getIpfsLink(URI.animationURI))
      setDropName(name)
      setIsLoading(false)
    }
    if (!dropAddress) return
    init()
    return
  }, [dropAddress, type, uri])

  const value = useMemo(
    () => ({
      dropAddress,
      tokenId,
      type,
      isLoading,
      imageUri,
      animationUri,
      dropName,
      fundsRecipient,
      sellerName,
      saleDetails
    }),
    [
      dropAddress,
      tokenId,
      type,
      isLoading,
      imageUri,
      animationUri,
      dropName,
      fundsRecipient,
      sellerName,
      saleDetails
    ],
  )

  return <DropContext.Provider value={value}>{children}</DropContext.Provider>
}

export const useDropProvider = () => {
  const context = useContext(DropContext)
  if (!context) {
    throw new Error("useDropProvider must be used within a DropProvider")
  }
  return context
}

export default DropProvider
