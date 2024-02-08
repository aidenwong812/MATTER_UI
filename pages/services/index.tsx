import { MatterMarketProvider } from "@/providers/MatterMarketProvider"
import ServicesPage from "../../components/Pages/ServicesPage"

const Services = () => (
  <MatterMarketProvider>
    <ServicesPage />
  </MatterMarketProvider>
)

export default Services
