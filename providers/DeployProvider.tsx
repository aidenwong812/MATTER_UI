import { createContext, useState, useContext, useMemo } from "react"
import useCreate1155Token from "../hooks/useCreate1155Token"
import useCreate1155Contract from "../hooks/useCreate1155Contract"
import { useCollection } from "./CollectionProvider"
import { toast } from "react-toastify"
import { useRouter } from "next/router"
import createProduct from "../lib/firebase/createProduct"

const DeployContext = createContext({} as any)

export const useDeploy = () => useContext(DeployContext)
export const DeployProvider = ({ children }) => {
  const router = useRouter()
  const [ isSelectedCreated, setIsSelectedCreated ] = useState(true)
  const [animationFile, setAnimationFile] = useState(null)
  const [animationSrc, setAnimationSrc] = useState(null)
  const [cover, setCover] = useState(null)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [creating, setCreating] = useState(false)
  const { create1155Token } = useCreate1155Token()
  const { create1155Contract } = useCreate1155Contract()
  const { drops1155, fetch1155Drops, selectedDrop } = useCollection()

  const buttonLabel = drops1155.length && !isSelectedCreated ? "Create Product" : "Create Category"
  const dropAddress = selectedDrop?.value

  const create = async () => {
    if (creating || !cover) return

    setCreating(true)
    if (drops1155?.length && !isSelectedCreated) {

      if (!dropAddress) {
        toast.error("Please, select a collection!")
        setCreating(false)
        return
      }

      const ipfsHash: any = await create1155Token(selectedDrop?.value, title, cover, description, animationFile)
      
      if (ipfsHash?.error) {
        setCreating(false)
        return
      }

      const response: any = await createProduct({
        category: {
          address: selectedDrop.value,
          name: selectedDrop.label
        },
        name: title,
        description
      })
      

      if (response?.error) {
        setCreating(false)
        return
      }
    } else {
      const response: any = await create1155Contract(title, description, cover)
      if (response?.error) {
        setCreating(false)
        return
      }
    }
    await fetch1155Drops()
    router.push("/checkout")
    setCreating(false)
  }

  const value = useMemo(
    () => ({
      animationFile,
      setAnimationFile,
      animationSrc,
      setAnimationSrc,
      cover,
      setCover,
      title,
      setTitle,
      description,
      setDescription,
      creating,
      setCreating,
      isSelectedCreated,
      setIsSelectedCreated,
      create,
      buttonLabel
    }),
    [
      animationFile,
      setAnimationFile,
      animationSrc,
      setAnimationSrc,
      cover,
      setCover,
      title,
      setTitle,
      description,
      setDescription,
      creating,
      setCreating,
      isSelectedCreated,
      setIsSelectedCreated,
      buttonLabel
    ],
  )

  return <DeployContext.Provider value={value}>{children}</DeployContext.Provider>
}
