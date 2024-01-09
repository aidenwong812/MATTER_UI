import React, { createContext, useContext, useMemo, useState } from "react"
import { useUserProvider } from "./UserProvider"

export enum Screen {
    SELECT_UI = "SELECT_UI",
    EDIT_FORM = "EDIT_FORM"
}

const AccountFormContext = createContext(null)

const AccountFormProvider = ({ children }) => {
  const [screenStatus, setScreenStatus] = useState(Screen.SELECT_UI)
  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [loading, setLoading] = useState(false)

  const updateAccountData = (newUserName) => () => {
    setLoading(true)
    
    setLoading(false)
  }

  const value = useMemo(
    () => ({ 
        userName,
        setUserName,
        setScreenStatus,
        screenStatus,
        setUserEmail
    }),
    [
        userName,
        setUserName,
        setScreenStatus,
        screenStatus,
        setUserEmail
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
