import { useRouter } from "next/router"
import useCreate1155Contract from "../hooks/useCreate1155Contract"
import { CHAIN_ID, digitalCategories, physicalCategories, serviceCategories } from "../lib/consts"
import createProduct from "../lib/firebase/createProduct"
import { productTypes } from "../lib/consts"
import { uploadToIpfs } from "onchain-magic"
import { useState } from "react"
import { useUserProvider } from "../providers/UserProvider"

const useDeployData = () => {
  const [cover, setCover] = useState(null)
  const [productName, setProductName] = useState("")
  const [productDescription, setProductDescription] = useState("")
  const [creating, setCreating] = useState(false)
  const [productType, setProductType] = useState(productTypes[0].value)
  const [productCategory, setProductCategory] = useState(physicalCategories[0].value)
  const [priceInUsd, setPriceInUsd] = useState("")
  const { create1155Contract } = useCreate1155Contract()
  const { push } = useRouter()
  const { userData } = useUserProvider()

  const create = async ({ cover, content }) => {
    if (creating) return

    setCover(cover[0])
    setCreating(true)

    const response = await create1155Contract(cover[0], CHAIN_ID, productName, productDescription)

    const { error } = response as any
    if (error) {
      setCreating(false)
      return
    }

    const productData = {
      cover: response.ipfs,
      productName,
      productDescription,
      priceInUsd: parseFloat(priceInUsd),
      productType,
      productCategory,
      content: null,
      contractAddress: response.contractAddress,
      customerId: userData?.id,
    }

    if (content) {
      const ipfsContentCid = await uploadToIpfs(content[0])
      productData.content = `ipfs://${ipfsContentCid}`
    }

    const newId = await createProduct(productData)
    const { error: createError } = newId as any

    if (createError) {
      setCreating(false)
      return
    }

    push(`/dashboard?tab=listings`)
    setCreating(false)
  }

  const getCategoryOptions = (type) => {
    switch (type) {
      case "Physical":
        return physicalCategories
      case "Digital":
        return digitalCategories
      case "Service":
        return serviceCategories
      default:
        return []
    }
  }

  return {
    cover,
    setCover,
    productName,
    setProductName,
    productDescription,
    setProductDescription,
    creating,
    setCreating,
    create,
    productType,
    setProductType,
    productCategory,
    setProductCategory,
    priceInUsd,
    setPriceInUsd,
    getCategoryOptions,
  }
}

export default useDeployData
