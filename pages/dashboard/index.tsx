import DashboardPage from "../../components/Pages/DashboardPage"
import { DashboardProvider } from "../../providers/DashboardProvider"

const Dashboard = () => (
  <DashboardProvider>
    <DashboardPage />
  </DashboardProvider>
)

export default Dashboard
