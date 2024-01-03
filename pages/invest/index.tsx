import InvestPage from "../../components/Pages/InvestPage"
import { InvestProvider } from "../../providers/InvestProvider"

const Invest = () => (
  <InvestProvider>
    <InvestPage />
  </InvestProvider>
)

export default Invest
