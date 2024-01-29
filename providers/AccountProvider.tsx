import React, { createContext, useContext, useEffect, useMemo, useState } from "react"
import createUser from "../lib/firebase/createUser"
import { useUserProvider } from "./UserProvider"
import { uploadToIpfs } from "onchain-magic"
import createCustomer from "../lib/firebase/createCustomer"

export enum Screen {
  SELECT_UI = "SELECT_UI",
  EDIT_FORM = "EDIT_FORM",
}

const AccountFormContext = createContext(null)

const AccountFormProvider = ({ children }) => {
  const userData = useUserProvider()
  const [userPFP, setUserPFP] = useState("")
  const [userPFPSrc, setUserPFPSrc] = useState("")
  const [screenStatus, setScreenStatus] = useState(Screen.SELECT_UI)
  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [loading, setLoading] = useState(false)

  const handleUpdate = async () => {
    setLoading(true)
    let pfp = ""
    if (userPFP) pfp = await uploadToIpfs(userPFP)

    await createCustomer({
      privy_email: userData.privyEmail,
      email: userEmail,
      user_name: userName,
      ...(pfp && { pfp: `ipfs://${pfp}` }),
    })

    await userData.getUserData()
    setLoading(false)
    setScreenStatus(Screen.SELECT_UI)
  }

  useEffect(() => {
    setUserName(userData.userName)
    setUserEmail(userData.userEmail)
    setUserPFPSrc(userData.userPFP)
  }, [userData])

  const value = useMemo(
    () => ({
      loading,
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
    }),
    [
      userName,
      setUserName,
      setScreenStatus,
      screenStatus,
      setUserEmail,
      userEmail,
      handleUpdate,
      loading,
      userPFP,
      setUserPFP,
      userPFPSrc,
      setUserPFPSrc,
    ],
  )

  return <AccountFormContext.Provider value={value}>{children}</AccountFormContext.Provider>
}

export const useAccountForm = () => {
  const context = useContext(AccountFormContext)
  if (!context) {
    throw new Error("useAccountForm must be used within a AccountFormProvider")
  }
  return context
}

export default AccountFormProvider
