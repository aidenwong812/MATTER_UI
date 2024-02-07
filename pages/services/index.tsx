import ServicesPage from "../../components/Pages/ServicesPage"
import { ServicesProvider } from "../../providers/ServicesProvider"

const Services = () => (
  <ServicesProvider>
    <ServicesPage />
  </ServicesProvider>
)

export default Services
