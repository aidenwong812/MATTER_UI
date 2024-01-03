import Layout from "../../Layout"
import AboutModule from "./AboutModule"
import FAQModule from "./FAQModule"
import HeroModule from "./HeroModule"
import BenefitModule from "./BenefitModule"

const LandingPage = () => (
  <Layout type="base">
    <HeroModule />
    <BenefitModule />
    <AboutModule />
    <FAQModule />
  </Layout>
)

export default LandingPage
