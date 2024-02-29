import { useEffect, useState } from "react"
import { getIpfsLink, uploadToIpfs } from "onchain-magic"
import { toast } from "react-toastify"
import createCustomer from "@/lib/firebase/createCustomer"
import { useUserProvider } from "@/providers/UserProvider"

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
      privyEmail: privyEmail,
      ...(userEmail && { email: userEmail }),
      ...(userName && { userName: userName }),
      ...(pfp && { pfp: `ipfs://${pfp}` }),
    })

    if (response?.error) {
      setLoading(false)
      return
    }

    toast.success("Saved Successfully.")
    await getUserData()
    setLoading(false)
    setScreenStatus(Screen.SELECT_UI)
  }

  useEffect(() => {
    setUserName(userData?.userName)
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
