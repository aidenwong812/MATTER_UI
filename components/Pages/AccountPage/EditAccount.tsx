import { Screen, useAccountForm } from "../../../providers/AccountProvider"
import { useUserProvider } from "../../../providers/UserProvider"
import Icon from "../../../shared/Icon"

const EditAccount = () => {
  const { privyEmail } = useUserProvider()
  const { setScreenStatus } = useAccountForm()

  return (
    <div
      className="w-full md:w-[375px] shadow-gray_shadow rounded-[10px]
        py-[40px] px-[26px] flex flex-col items-center"
    >
      <div
        className="flex bg-gray_10 justify-center items-center
            w-[84px] rounded-full aspect-[1/1] mb-[32px]"
      >
        <Icon name="camera" className="text-white" />
      </div>
      <p
        className="leading-[110%] tracking-[-0.7px]
            text-[28px] font-[400] text-center"
      >
        Username
      </p>
      <p className="text-[16px] tracking-[-0.4px] font-[400] leading-[100%] mt-[24px]">
        {privyEmail}
      </p>
      <button
        type="button"
        className="border border-gray_2 rounded-full
                        py-[10px] px-[20px] my-[32px]"
        onClick={() => setScreenStatus(Screen.EDIT_FORM)}
      >
        Edit Account
      </button>
      <Icon name="boxArchive" className="text-gray_4" />
      <p className="text-[12px] font-[400] tracking-[-0.3px] leading-[100%] mt-[10px]">Purchases</p>
    </div>
  )
}

export default EditAccount
