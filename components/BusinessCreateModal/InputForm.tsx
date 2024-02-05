import Link from "next/link"
import Input from "../../shared/Input"
import { useAccountForm } from "../../providers/AccountProvider"
import Form from "../../shared/Form"
import { validation } from "../../lib/validations/business-form-validation"
import Checkbox from "../../shared/Checkbox"

const InputForm = () => {
  const {
    publicBusinessName,
    setPublicBusinessName,
    userName,
    setUserName,
    businessSite,
    setBusinessSite,
    isAgreeForUpdate,
    setIsAgreeForUpdate,
    isApprovedPrivacy,
    setIsApprovedPrivacy,
    loading,
    handleCreateBusinessAccount,
  } = useAccountForm()

  return (
    <Form
      validationSchema={validation}
      onSubmit={handleCreateBusinessAccount}
      className="flex flex-col gap-y-[12px] w-full my-[24px]"
    >
      <Input
        value={publicBusinessName}
        onChange={(e) => setPublicBusinessName(e.target.value)}
        placeholder="Public Business Name"
        className="!border-gray_6 !bg-white"
        id="businessName"
        name="businessName"
        hookToForm
      />
      <Input
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="User Name"
        className="!border-gray_6 !bg-white"
        id="username"
        name="username"
        hookToForm
      />
      <Input
        value={businessSite}
        onChange={(e) => setBusinessSite(e.target.value)}
        placeholder="Business Website"
        className="!border-gray_6 !bg-white"
        id="businessSite"
        name="businessSite"
        hookToForm
      />
      <div className="flex gap-x-[14px] items-start mt-[12px] mb-[24px]">
        <Checkbox
          id="agreeForUpdate"
          onChange={() => setIsAgreeForUpdate(!isAgreeForUpdate)}
          readOnly
          checked={isAgreeForUpdate}
        />
        <p className="text-[16px] leading-[150%] tracking-[-0.384px]">
          Sign up for emails to get updates from Matter on new products and services.
        </p>
      </div>
      <div className="flex gap-x-[14px] items-start mb-[24px]">
        <Checkbox
          id="approvedPrivacy"
          onChange={() => setIsApprovedPrivacy(!isApprovedPrivacy)}
          readOnly
          checked={isApprovedPrivacy}
        />
        <p className="text-[16px] leading-[150%] tracking-[-0.384px]">
          I agree to the Matter{" "}
          <Link href="/privacy">
            <span className="underline">Privacy Policy</span>
          </Link>{" "}
          and
          <Link href="/terms">
            <span className="underline"> Terms of Use</span>
          </Link>
          .
        </p>
      </div>
      <button
        type="submit"
        className="border border-black rounded-full bg-black
            w-full py-[15px] text-white"
        disabled={loading || (!isAgreeForUpdate && !isApprovedPrivacy)}
      >
        Apply Now
      </button>
    </Form>
  )
}

export default InputForm
