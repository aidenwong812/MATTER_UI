import { useEffect, useState } from "react"
import createCustomer from "../lib/firebase/createCustomer"
import { getIpfsLink, uploadToIpfs } from "onchain-magic"
import { useUserProvider } from "../providers/UserProvider"
import { toast } from "react-toastify"

export enum Screen {
  SELECT_UI = "SELECT_UI",
  EDIT_FORM = "EDIT_FORM",
}

const usePersonalAccount = ({ setLoading }) => {
  const { userData, getUserData, privyEmail } = useUserProvider()

  const [userPFP, setUserPFP] = useState("")
  const [userPFPSrc, setUserPFPSrc] = useState("")
  const [screenStatus, setScreenStatus] = useState(Screen.SELECT_UI)
  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")

  const handleUpdate = async () => {
    setLoading(true)
    let pfp = ""
    if (userPFP) pfp = await uploadToIpfs(userPFP)

    const response: any = await createCustomer({
      privy_email: privyEmail,
      email: userEmail,
      user_name: userName,
      ...(pfp && { pfp: `ipfs://${pfp}` }),
    })

    if (response?.error) {
      setLoading(false)
      return
    }

    await getUserData()
    setLoading(false)
    setScreenStatus(Screen.SELECT_UI)
  }

  useEffect(() => {
    setUserName(userData?.user_name)
    setUserEmail(userData?.email || privyEmail)
    setUserPFPSrc(getIpfsLink(userData?.pfp))
  }, [userData, privyEmail])

  return {
    userName,
    setUserName,
    setScreenStatus,
    screenStatus,
    setUserEmail,
    userEmail,
    handleUpdate,
    userPFP,
    setUserPFP,
    userPFPSrc,
    setUserPFPSrc,
  }
}

export default usePersonalAccount
