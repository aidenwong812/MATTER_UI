import { MatterMarketProvider } from "@/providers/MatterMarketProvider"
import DigitalPage from "../../components/Pages/DigitalPage"

const ProductDigital = () => (
  <MatterMarketProvider type="Digital">
    <DigitalPage />
  </MatterMarketProvider>
)

export default ProductDigital
