import CreatePage from "../../components/Pages/CreatePage"
import { DeployProvider } from "../../providers/DeployProvider"

const Create = () => (
  <DeployProvider>
    <CreatePage />
  </DeployProvider>
)

export default Create
