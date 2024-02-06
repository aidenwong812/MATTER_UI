import { useRouter } from "next/router"
import useCreate1155Contract from "../hooks/useCreate1155Contract"
import { CHAIN_ID, digitalCategories, physicalCategories, serviceCategories } from "../lib/consts"
import createProduct from "../lib/firebase/createProduct"
import { productTypes } from "../lib/consts"
import { uploadToIpfs } from "onchain-magic"
import { useState } from "react"

const useDeployData = () => {
  const [cover, setCover] = useState(null)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [creating, setCreating] = useState(false)
  const [productType, setProductType] = useState(productTypes[0].value)
  const [productCategory, setProductCategory] = useState(physicalCategories[0])
  const [priceInUsd, setPriceInUsd] = useState("")
  const { create1155Contract } = useCreate1155Contract()
  const { push } = useRouter()

  const create = async ({ cover, content }) => {
    if (creating) return

    setCover(cover[0])
    setCreating(true)

    const ipfsCid: any = await create1155Contract(CHAIN_ID, cover[0], title, description)
    if (ipfsCid?.error) {
      setCreating(false)
      return
    }

    const productData = {
      cover: ipfsCid,
      title,
      description,
      priceInUsd,
      productType,
      productCategory,
      content: null,
    }

    if (content) {
      const ipfsContentCid = await uploadToIpfs(content[0])
      productData.content = `ipfs://${ipfsContentCid}`
    }

    await createProduct(productData)

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
    title,
    setTitle,
    description,
    setDescription,
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
