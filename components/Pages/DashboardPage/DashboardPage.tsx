import { useState } from "react"
import { useUserProvider } from "../../../providers/UserProvider"
import Layout from "../../Layout"
import PendingApprovalModal from "../../PendingApprovalModal"
import SeoHead from "../../SeoHead"
import Navbar from "./Navbar"
import data from "./data.json"
import Sales from "./Sales"

const DashboardPage = () => {
  const { userData } = useUserProvider()
  const [selectedTab, setSelectedTab] = useState(data[0].value)

  return (
    <Layout type="base" className="">
      <SeoHead title="Matter | Account" />
      <div className="w-full min-h-screen pt-[60px] pb-[30px]">
        {userData && !userData?.business?.isApproved && <PendingApprovalModal />}
        <Navbar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        {selectedTab === data[0].value && <Sales />}
      </div>
    </Layout>
  )
}

export default DashboardPage