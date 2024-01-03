import DashboardPage from "../../components/Dashboard"
import { DashboardProvider } from "../../providers/DashboardProvider"

const OverView = () => (
  <DashboardProvider>
    <DashboardPage pageName="overview" />
  </DashboardProvider>
)

export default OverView
