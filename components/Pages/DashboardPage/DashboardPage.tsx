import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { useUserProvider } from "../../../providers/UserProvider"
import Layout from "../../Layout"
import PendingApprovalModal from "../../PendingApprovalModal"
import SeoHead from "../../SeoHead"
import Navbar from "./Navbar"
import data from "./data.json"
import Sales from "./Sales"
import Listing from "./Listing"
import PayoutActivity from "./PayoutActivity"

const DashboardPage = () => {
  const { userData } = useUserProvider()
  const [selectedTab, setSelectedTab] = useState(data[0].value)
  const { query } = useRouter()

  useEffect(() => {
    if (query.tab === data[1].value) setSelectedTab(data[1].value)
  }, [query])

  return (
    <Layout type="base" className="">
      <SeoHead title="Matter | Account" />
      <div className="w-full min-h-screen pt-[60px] pb-[30px]">
        {userData && !userData?.business?.isApproved && <PendingApprovalModal />}
        <Navbar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        {selectedTab === data[0].value && <Sales />}
        {selectedTab === data[1].value && <Listing />}
        {selectedTab === data[2].value && <PayoutActivity />}
      </div>
    </Layout>
  )
}

export default DashboardPage
