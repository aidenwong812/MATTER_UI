import { useAccountForm } from "../../../providers/AccountProvider"
import { Screen } from "../../../hooks/usePersonalAccount"
import Icon from "../../../shared/Icon"
import Input from "../../../shared/Input"
import { validation } from "../../../lib/validations/account-form-validation"
import Form from "../../../shared/Form"
import Image from "../../../shared/Image"

const EditAccountForm = () => {
  const {
    setScreenStatus,
    handleUpdate,
    userName,
    setUserName,
    publicBusinessName,
    setPublicBusinessName,
    handleCreateBusinessAccount,
    userEmail,
    setUserEmail,
    loading,
    setUserPFP,
    userPFPSrc,
    setUserPFPSrc,
  } = useAccountForm()

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (!file) return

    if (file) {
      if (file.type.includes("image")) {
        setUserPFP(file)
        setUserPFPSrc(URL.createObjectURL(file))
      }
    }
  }
  const handleUpdateAndCreateBusiness = async () => {
    await handleUpdate()
    await handleCreateBusinessAccount()
  }

  return (
    <div
      className="w-full md:w-[375px] shadow-gray_shadow rounded-[10px]
        py-[40px] px-[26px] flex flex-col items-center bg-white"
    >
      <div
        className="flex bg-gray_10 justify-center items-center
            w-[84px] rounded-full aspect-[1/1] mb-[32px] relative"
      >
        {userPFPSrc ? (
          <Image
            link={userPFPSrc}
            blurLink={userPFPSrc}
            alt="not found icon"
            containerClasses="w-[84px] aspect-[1/1] rounded-full overflow-hidden"
          />
        ) : (
          <Icon name="camera" className="text-white" />
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full h-full absolute  left-0 top-0 z-[5] opacity-0"
        />
      </div>
      <p
        className="leading-[110%] tracking-[-0.7px]
            text-[28px] font-[400] text-center"
      >
        Edit Your Account
      </p>
      <Form
        validationSchema={validation}
        onSubmit={handleUpdateAndCreateBusiness}
        className="my-[24px] flex flex-col gap-y-[12px] w-full"
      >
        <Input
          value={publicBusinessName}
          onChange={(e) => setPublicBusinessName(e.target.value)}
          placeholder="Business Name"
          className="!border-black"
          id="business"
          name="business"
          hookToForm
        />
        <Input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="User Name"
          className="!border-black"
          id="username"
          name="username"
          hookToForm
        />
        <Input
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          placeholder="Email"
          className="!border-black"
          id="useremail"
          name="useremail"
          hookToForm
        />
        <button
          type="submit"
          className="border border-gray_2 rounded-full
                          w-[323px] mb-[32px] py-[15px]"
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Changes"}
        </button>
      </Form>
      <button
        type="button"
        onClick={() => setScreenStatus(Screen.SELECT_UI)}
        className="text-link text-[16px] leading-[120%] font-[400]"
      >
        Cancel
      </button>
    </div>
  )
}

export default EditAccountForm
