import { useState } from "react"
import { useAccountForm } from "../../../providers/AccountProvider"
import { Screen } from "../../../hooks/usePersonalAccount"
import Layout from "../../Layout"
import SeoHead from "../../SeoHead"
import CreateBusinessAccount from "./CreateBusinessAccount"
import EditAccount from "./EditAccount"
import EditAccountForm from "./EditAccountForm"
import BusinessCreateModal from "../../BusinessCreateModal"

const AccountPage = () => {
  const { screenStatus } = useAccountForm()
  const [isOpenBusinessModal, setIsOpenBusinessModal] = useState(true)

  return (
    <Layout type="base" className="!bg-[url('/images/create-background.png')] !bg-center !bg-cover">
      <SeoHead title="Matter | Account" />
      <div
        className="w-full xl:w-[1440px] lg:w-[1280px] md:w-[1024px] min-h-screen
                  md:px-[24px] lg:px-[32px] xl:px-[40px] pt-[90px] pb-[30px] px-[18px]
                  flex flex-col items-center justify-center gap-y-[10px]"
      >
        {screenStatus === Screen.SELECT_UI && (
          <>
            <EditAccount />
            <CreateBusinessAccount onClick={() => setIsOpenBusinessModal(!isOpenBusinessModal)} />
          </>
        )}
        {screenStatus === Screen.EDIT_FORM && <EditAccountForm />}
      </div>
      <BusinessCreateModal
        isVisible={isOpenBusinessModal}
        toggleModal={() => setIsOpenBusinessModal(!isOpenBusinessModal)}
      />
    </Layout>
  )
}

export default AccountPage
