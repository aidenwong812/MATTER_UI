import React, { createContext, useContext, useMemo, useState } from "react"
import usePersonalAccount from "../hooks/usePersonalAccount"
import useBusinessAccount from "../hooks/useBusinessAccount"

const AccountFormContext = createContext(null)

const AccountFormProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)

  const personalAccount = usePersonalAccount({ setLoading })
  const businessAccount = useBusinessAccount({ setLoading })

  const value = useMemo(
    () => ({
      ...personalAccount,
      ...businessAccount,
      loading,
      setLoading,
    }),
    [personalAccount, businessAccount, loading, setLoading],
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
