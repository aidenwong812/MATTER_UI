import DistributePage from "../../components/Pages/DistributePage"
import { DistributeProvider } from "../../providers/DistributeProvider"

const Distribute = () => (
  <DistributeProvider>
    <DistributePage />
  </DistributeProvider>
)

export default Distribute
