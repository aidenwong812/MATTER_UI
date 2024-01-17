import React, { createContext, useContext, useMemo, useState } from "react"

export enum Screen {
    SELECT_UI = "SELECT_UI",
    EDIT_FORM = "EDIT_FORM"
}

const AccountFormContext = createContext(null)

const AccountFormProvider = ({ children }) => {
  const [screenStatus, setScreenStatus] = useState(Screen.SELECT_UI)
  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")

  const value = useMemo(
    () => ({ 
        userName,
        setUserName,
        setScreenStatus,
        screenStatus,
        setUserEmail,
        userEmail
    }),
    [
        userName,
        setUserName,
        setScreenStatus,
        screenStatus,
        setUserEmail,
        userEmail
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
