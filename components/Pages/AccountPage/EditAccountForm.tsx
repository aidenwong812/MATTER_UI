import { Screen, useAccountForm } from "../../../providers/AccountProvider"
import Icon from "../../../shared/Icon"
import Input from "../../../shared/Input"
import { validation } from "../../../utils/account-form-validation"
import Form from "../../../shared/Form"

const EditAccountForm = () => {
  const { setScreenStatus, handleUpdate, userName, setUserName, userEmail, setUserEmail, loading, userPFP } =
    useAccountForm()

  return (
    <div
      className="w-full md:w-[375px] shadow-gray_shadow rounded-[10px]
        py-[40px] px-[26px] flex flex-col items-center bg-white"
    >
      <div
        className="flex bg-gray_10 justify-center items-center
            w-[84px] rounded-full aspect-[1/1] mb-[32px] relative"
      >
        {userPFP ? <></> : <Icon name="camera" className="text-white" />}
        <input
          type=""
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
        onSubmit={handleUpdate}
        className="my-[24px] flex flex-col gap-y-[12px] w-full"
      >
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
          Save Changes
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
