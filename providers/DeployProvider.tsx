import { createContext, useState, useContext, useMemo, useEffect } from "react"
import useConnectedWallet from "../hooks/useConnectedWallet"
import useCreate1155Contract from "../hooks/useCreate1155Contract"
import { CHAIN_ID } from "../lib/consts"
import { useRouter } from "next/router"

const DeployContext = createContext({} as any)

export const useDeploy = () => useContext(DeployContext)

export const DeployProvider = ({ children }) => {
  const { connectedWallet } = useConnectedWallet()
  const [cover, setCover] = useState(null)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [fundsRecipient, setFundsRecipient] = useState("")
  const [creating, setCreating] = useState(false)
  const { create1155Contract } = useCreate1155Contract()
  const { push } = useRouter()

  useEffect(() => {
    setFundsRecipient(connectedWallet)
  }, [connectedWallet])

  const create = async ({cover}) => {
    if (creating) return
    setCover(cover[0])
    setCreating(true)
    const response: any = await create1155Contract(CHAIN_ID, cover[0], title, description, fundsRecipient)
    if (response?.error) {
      setCreating(false)
      return
    }
    push("/checkout")
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
      fundsRecipient,
      setFundsRecipient,
      creating,
      setCreating,
      create
    }),
    [
      cover,
      setCover,
      title,
      setTitle,
      description,
      setDescription,
      fundsRecipient,
      setFundsRecipient,
      creating,
      setCreating,
      create
    ],
  )

  return <DeployContext.Provider value={value}>{children}</DeployContext.Provider>
}
