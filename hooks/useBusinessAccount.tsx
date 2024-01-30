import { useEffect, useState } from "react"
import { useUserProvider } from "../providers/UserProvider"

const useBusinessAccount = ({ setLoading }) => {
  const { privyEmail } = useUserProvider()
  const [isEditableEmail, setIsEditableEmail] = useState(false)
  const [emailForVerify, setEmailForVerify] = useState(false)
  const [verifyCode, setVerifyCode] = useState("")
  const [publicBusinessName, setPublicBusinessName] = useState("")
  const [businessSite, setBusinessSite] = useState("")
  const [isAgreeForUpdate, setIsAgreeForUpdate] = useState(false)
  const [isApprovedPrivacy, setIsApprovedPrivacy] = useState(false)

  const handleCreateBusinessAccount = () => {
    setLoading(true)
    setLoading(false)
  }

  useEffect(() => {
    if (privyEmail) setEmailForVerify(privyEmail)
  }, [privyEmail])

  return {
    isEditableEmail,
    setIsEditableEmail,
    emailForVerify,
    setEmailForVerify,
    handleCreateBusinessAccount,
    verifyCode,
    setVerifyCode,
    publicBusinessName,
    setPublicBusinessName,
    businessSite,
    setBusinessSite,
    isAgreeForUpdate,
    setIsAgreeForUpdate,
    isApprovedPrivacy,
    setIsApprovedPrivacy,
  }
}

export default useBusinessAccount
