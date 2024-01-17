import { usePrivy } from "@privy-io/react-auth"
import { useRouter } from "next/router"
import { Screen, useAccountForm } from "../../../providers/AccountProvider"
import { useUserProvider } from "../../../providers/UserProvider"
import Icon from "../../../shared/Icon"
import Image from "../../../shared/Image"

const EditAccount = () => {
  const { privyEmail } = useUserProvider()
  const { setScreenStatus } = useAccountForm()
  const { logout } = usePrivy()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push("/")
  }

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
