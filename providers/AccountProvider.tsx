import React, { createContext, useContext, useEffect, useMemo, useState } from "react"
import createUser from "../lib/firebase/createUser"
import { useUserProvider } from "./UserProvider"

export enum Screen {
    SELECT_UI = "SELECT_UI",
    EDIT_FORM = "EDIT_FORM"
}

const AccountFormContext = createContext(null)

const AccountFormProvider = ({ children }) => {
  const { userEmail: email, privyEmail, userName: name, getUserData } = useUserProvider()
  const [userPFP, setUserPFP] = useState("")
  const [screenStatus, setScreenStatus] = useState(Screen.SELECT_UI)
  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [loading, setLoading] = useState(false)

  const handleUpdate = async () => {
    setLoading(true)
    await createUser({
      privy_email: privyEmail,
      email: userEmail,
      user_name: userName
    })
    await getUserData()
    setLoading(false)
    setScreenStatus(Screen.SELECT_UI)
  }

  useEffect(() => {
    setUserName(name)
    setUserEmail(email)
  }, [name, email])

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
      userPFP
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
      userPFP
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
