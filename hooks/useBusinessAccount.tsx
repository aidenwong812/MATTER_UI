import { useEffect, useState } from "react"
import { useUserProvider } from "../providers/UserProvider"
import createBusinessAccount from "../lib/firebase/createBusiness"
import { useRouter } from "next/router"
import { toast } from "react-toastify"

const useBusinessAccount = ({ setLoading }) => {
  const { userData } = useUserProvider()
  const [isEditableEmail, setIsEditableEmail] = useState(false)
  const [emailForVerify, setEmailForVerify] = useState(false)
  const [verifyCode, setVerifyCode] = useState("")
  const [publicBusinessName, setPublicBusinessName] = useState("")
  const [businessSite, setBusinessSite] = useState("")
  const [isAgreeForUpdate, setIsAgreeForUpdate] = useState(false)
  const [isApprovedPrivacy, setIsApprovedPrivacy] = useState(false)
  const { push } = useRouter()

  const handleCreateBusinessAccount = async () => {
    setLoading(true)
    await createBusinessAccount(
      {
        businessName: publicBusinessName,
        website: businessSite,
        customerId: userData?.id,
        agreeToPrivacyAndTerms: true,
        marketingSelected: true,
      },
      userData?.id,
    )
    toast.success("Successfully applied. Typical review time: 2-3 Days.")
    push("/dashboard")
    setLoading(false)
  }

  useEffect(() => {
    setEmailForVerify(userData?.privyEmail)
    setBusinessSite(userData?.business?.website)
    setPublicBusinessName(userData?.business?.businessName)
  }, [userData])

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
