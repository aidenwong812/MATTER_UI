import Layout from "../Layout"
import OverViewPage from "./OverViewPage"
import SideBar from "./SideBar"

const DashboardPage = ({ pageName }) => (
  <Layout type="full">
    <div
      className="md:grid md:grid-cols-12
            pt-[100px] md:pt-[150px] 
            pb-[50px] md:pb-[100px]
            gap-x-[40px]
            w-full"
    >
      <div className="md:col-span-4 hidden md:block">
        <SideBar />
      </div>
      <div
        className="md:col-span-8 
      px-[15px] md:pr-[30px]"
      >
        {pageName === "overview" && <OverViewPage />}
      </div>
    </div>
  </Layout>
)

export default DashboardPage
