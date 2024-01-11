import CreatePage from "../../components/Pages/CreatePage"
import CollectionProvider from "../../providers/CollectionProvider"
import { DeployProvider } from "../../providers/DeployProvider"

const Create = () => (
  <CollectionProvider>
    <DeployProvider>
      <CreatePage />
    </DeployProvider>
  </CollectionProvider>
)

export default Create
