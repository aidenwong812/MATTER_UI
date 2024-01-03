import { useRouter } from "next/router"
import { createContext, useState, useContext, useMemo } from "react"

const InvestContext = createContext(undefined)

export const InvestProvider = ({ children }) => {
  const { query } = useRouter()
  const { referral } = query
  const [amount, setAmount] = useState<string>("1500")

  const value = useMemo(() => ({ amount, setAmount, referral }), [amount, setAmount, referral])

  return <InvestContext.Provider value={value}>{children}</InvestContext.Provider>
}

export const useInvest = () => {
  const context = useContext(InvestContext)
  if (context === undefined) {
    throw new Error("useInvest must be used within an InvestProvider")
  }
  return context
}
