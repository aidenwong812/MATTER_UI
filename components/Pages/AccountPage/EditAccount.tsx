import { usePrivy } from "@privy-io/react-auth"
import { useRouter } from "next/router"
import { getIpfsLink } from "onchain-magic"
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
  const handleRedirectToPurchases = () => {
    push("/purchases")
  }

  return (
    <div
      className="w-full md:w-[375px] shadow-gray_shadow rounded-[10px]
        py-[40px] px-[26px] flex flex-col items-center bg-white"
    >
      <div className="flex gap-x-[10px] items-center">
        <Image
          link="/images/matter_mini_logo_black.svg"
          blurLink="/images/matter_mini_logo_black.png"
          containerClasses="w-[19px] aspect-[19/14]"
          alt="not found icon"
        />
        <p className="tracking-[6px] font-[400] text-[12px] leading-[120%]">BUSINESS</p>
      </div>
      <div
        className="flex bg-gray_10 justify-center items-center
            w-[84px] rounded-full aspect-[1/1] mb-[8px] mt-[32px]"
      >
        {userData?.pfp ? (
          <Image
            link={getIpfsLink(userData?.pfp)}
            blurLink={getIpfsLink(userData?.pfp)}
            alt="not found icon"
            containerClasses="w-[84px] aspect-[1/1] rounded-full overflow-hidden"
          />
        ) : (
          <Icon name="camera" className="text-white" />
        )}
      </div>
      <p className="text-[28px] tracking-[-0.4px] font-[400] leading-[100%] mt-[24px] text-black">
        {userData?.business.businessName}
      </p>
      <p className="text-[16px] tracking-[-0.4px] font-[400] leading-[100%] mt-[24px] text-black">
        {userData?.userName}
      </p>
      <p className="text-[16px] tracking-[-0.4px] font-[400] leading-[100%] mt-[24px] text-black">
        {userData?.privyEmail}
      </p>
      <p className="text-[16px] tracking-[-0.4px] font-[400] leading-[100%] mt-[24px] text-black">
        {userData?.business.website}
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
          <button
            className="flex flex-col items-center"
            type="button"
            onClick={handleRedirectToPurchases}
          >
            <Image
              link="/images/archive.svg"
              blurLink="/images/archive.png"
              containerClasses="w-[25px] h-[24px]"
              alt="not found icon"
            />
            <p className="text-[12px] font-[400] tracking-[-0.3px] leading-[100%] mt-[10px]">
              Purchases
            </p>
          </button>
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
