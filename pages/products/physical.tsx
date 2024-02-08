import { MatterMarketProvider } from "@/providers/MatterMarketProvider"
import PhysicalPage from "../../components/Pages/PhysicalPage"

const ProductPhysical = () => (
  <MatterMarketProvider type="Physical">
    <PhysicalPage />
  </MatterMarketProvider>
)

export default ProductPhysical
