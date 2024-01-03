import Layout from "../../Layout"
import Header from "../../Header"
import InvestModule from "./InvestModule"
import AboutModule from "./AboutModule"

const InvestPage = () => (
  <Layout type="row">
    <Header type="authenticated" />
    <InvestModule />
    <AboutModule />
  </Layout>
)

export default InvestPage
