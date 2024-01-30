import { usePrivy } from "@privy-io/react-auth"
import { useRouter } from "next/router"
import { useAccountForm } from "../../../providers/AccountProvider"
import { Screen } from "../../../hooks/usePersonalAccount"
import { useUserProvider } from "../../../providers/UserProvider"
import Icon from "../../../shared/Icon"
import Image from "../../../shared/Image"

const EditAccount = () => {
  const { userData } = useUserProvider()
  const { setScreenStatus } = useAccountForm()
  const { logout } = usePrivy()
  const { push } = useRouter()

  const handleLogout = () => {
    logout()
    push("/")
  }

  return (
    <div
      className="w-full md:w-[375px] shadow-gray_shadow rounded-[10px]
        py-[40px] px-[26px] flex flex-col items-center bg-white"
    >
      <div
        className="flex bg-gray_10 justify-center items-center
            w-[84px] rounded-full aspect-[1/1] mb-[32px]"
      >
        {userData?.pfp ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={userData?.pfp} alt="not found pfp" className="rounded-full" />
        ) : (
          <Icon name="camera" className="text-white" />
        )}
      </div>
      <p
        className="leading-[110%] tracking-[-0.7px]
            text-[28px] font-[400] text-center"
      >
        {userData?.first_name} {userData?.last_name}
      </p>
      <p className="text-[16px] tracking-[-0.4px] font-[400] leading-[100%] mt-[24px] text-black">
        {userData?.privy_email}
      </p>
      <button
        type="button"
        className="border border-gray_2 rounded-full
                        py-[10px] px-[20px] my-[32px]"
        onClick={() => setScreenStatus(Screen.EDIT_FORM)}
      >
        Edit Account
      </button>
      <div className="flex items-end justify-around w-full">
        <div className="flex flex-col items-center">
          <Image
            link="/images/archive.svg"
            blurLink="/images/archive.png"
            containerClasses="w-[25px] h-[24px]"
            alt="not found icon"
          />
          <p className="text-[12px] font-[400] tracking-[-0.3px] leading-[100%] mt-[10px]">
            Purchases
          </p>
        </div>
        <button className="flex flex-col items-center" type="button" onClick={handleLogout}>
          <Image
            link="/images/logout.svg"
            blurLink="/images/logout.png"
            containerClasses="w-[25px] h-[24px]"
            alt="not found icon"
          />
          <p className="text-[12px] font-[400] tracking-[-0.3px] leading-[100%] mt-[10px]">
            Log out
          </p>
        </button>
      </div>
    </div>
  )
}

export default EditAccount
