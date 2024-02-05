import { createContext, useState, useContext, useMemo } from "react"
import useCreate1155Contract from "../hooks/useCreate1155Contract"
import { CHAIN_ID } from "../lib/consts"
import { useRouter } from "next/router"
import createProduct from "../lib/firebase/createProduct"

const DeployContext = createContext({} as any)

export const useDeploy = () => useContext(DeployContext)

export const DeployProvider = ({ children }) => {
  const [cover, setCover] = useState(null)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [creating, setCreating] = useState(false)
  const { create1155Contract } = useCreate1155Contract()
  const { push } = useRouter()

  const create = async ({ cover }) => {
    if (creating) return
    setCover(cover[0])
    setCreating(true)
    const ipfsCid: any = await create1155Contract(CHAIN_ID, cover[0], title, description)
    if (ipfsCid?.error) {
      setCreating(false)
      return
    }
    await createProduct({
      cover: ipfsCid,
      title,
      description,
    })
    push(`/dashboard?tab=listings`)
    setCreating(false)
  }

  const value = useMemo(
    () => ({
      cover,
      setCover,
      title,
      setTitle,
      description,
      setDescription,
      creating,
      setCreating,
      create,
    }),
    [cover, setCover, title, setTitle, description, setDescription, creating, setCreating, create],
  )

  return <DeployContext.Provider value={value}>{children}</DeployContext.Provider>
}
