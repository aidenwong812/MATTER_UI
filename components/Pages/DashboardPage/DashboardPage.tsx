import { useUserProvider } from "../../../providers/UserProvider"
import Layout from "../../Layout"
import PendingApprovalModal from "../../PendingApprovalModal"
import SeoHead from "../../SeoHead"

const DashboardPage = () => {
  const { userData } = useUserProvider()

  return (
    <Layout type="base" className="">
      <SeoHead title="Matter | Account" />
      <div
        className="w-full xl:w-[1440px] lg:w-[1280px] md:w-[1024px] min-h-screen
                  md:px-[24px] lg:px-[32px] xl:px-[40px] pt-[90px] pb-[30px] px-[18px]
                  flex flex-col items-center justify-center gap-y-[10px]"
      >
        {!userData?.business?.isApproved && <PendingApprovalModal />}
      </div>
    </Layout>
  )
}

export default DashboardPage
