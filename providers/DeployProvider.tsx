import { createContext, useState, useContext, useMemo, useEffect } from "react"
import useConnectedWallet from "../hooks/useConnectedWallet"

const DeployContext = createContext({} as any)

export const useDeploy = () => useContext(DeployContext)

export const DeployProvider = ({ children }) => {
  const { connectedWallet } = useConnectedWallet()
  const [ isSelectedCreated, setIsSelectedCreated ] = useState(true)

  const [animationFile, setAnimationFile] = useState(null)
  const [animationSrc, setAnimationSrc] = useState(null)
  const [cover, setCover] = useState(null)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const [fundsRecipient, setFundsRecipient] = useState(connectedWallet)
  const [posting, setPosting] = useState(false)

  useEffect(() => {
    setFundsRecipient(connectedWallet)
  }, [connectedWallet])

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
      fundsRecipient,
      setFundsRecipient,
      posting,
      setPosting,
      isSelectedCreated,
      setIsSelectedCreated
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
      fundsRecipient,
      setFundsRecipient,
      posting,
      setPosting,
      isSelectedCreated,
      setIsSelectedCreated
    ],
  )

  return <DeployContext.Provider value={value}>{children}</DeployContext.Provider>
}
