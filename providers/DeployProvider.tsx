import { createContext, useState, useContext, useMemo, useEffect } from "react"
import { useAccount } from "wagmi"
import { useUserProvider } from "./UserProvider"

const DeployContext = createContext({} as any)

export const useDeploy = () => useContext(DeployContext)

export const DeployProvider = ({ children }) => {
  const { address } = useAccount()
  const { zorbOwner, loadingZorbOwner, connectedWallet } = useUserProvider()

  const [animationFile, setAnimationFile] = useState(null)
  const [animationSrc, setAnimationSrc] = useState(null)
  const [cover, setCover] = useState(null)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const [fundsRecipient, setFundsRecipient] = useState(connectedWallet || address)
  const [posting, setPosting] = useState(false)

  useEffect(() => {
    setFundsRecipient(zorbOwner || connectedWallet || address)
  }, [zorbOwner, connectedWallet, address])

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
      loadingZorbOwner,
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
      loadingZorbOwner,
    ],
  )

  return <DeployContext.Provider value={value}>{children}</DeployContext.Provider>
}
