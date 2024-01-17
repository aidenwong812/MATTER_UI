import { createContext, useContext, useState, useMemo, useEffect } from "react"
import getIpfsLink from "../lib/getIpfsLink"
import { CHAIN_ID } from "../lib/consts"
import axios from "axios"
import get1155SaleStatus from "../lib/get1155SaleStatus"
import { get1155Minters } from "../lib/zora/get1155Minters"

const DropContext = createContext(null)

const DropProvider = ({ children, drop }) => {
  const { uri, contractAddress: dropAddress, contractName: dropContractName, type, tokenId } = drop
  const [imageUri, setImageUri] = useState("")
  const [animationUri, setAnimationUri] = useState("")
  const [sellerName, setSellerName] = useState("")
  const [dropName, setDropName] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [saleDetails, setSaleDetail] = useState(null)
  const [description, setDescription] = useState("")
  const [canMint, setCanMint] = useState(false)

  useEffect(() => {
    const init1155Uri = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get(getIpfsLink(uri))
        const saleDetails = await get1155SaleStatus(dropAddress, tokenId)
        const { data } = response
        setImageUri(getIpfsLink(data.image))
        setAnimationUri(getIpfsLink(data.animation_url))
        setDropName(data?.name?.contractName || data?.name)
        setDescription(data.description)
        setSaleDetail(saleDetails)

        const minters = await get1155Minters(dropAddress, tokenId, CHAIN_ID)

        if (minters.length < 1) {
          setCanMint(false)
          return
        }

        setCanMint(true)
        // eslint-disable-next-line no-empty
      } catch (err) {}
      setIsLoading(false)
    }
    if (!dropAddress) return
    init1155Uri()
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
      sellerName,
      saleDetails,
      description,
      canMint,
      dropContractName
    }),
    [
      dropAddress,
      tokenId,
      type,
      isLoading,
      imageUri,
      animationUri,
      dropName,
      sellerName,
      saleDetails,
      description,
      canMint,
      dropContractName
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
