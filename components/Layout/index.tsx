import { useUserProvider } from "../../providers/UserProvider"
import LoadingPage from "../Pages/LoadingPage"
import BaseLayout from "./BaseLayout"
import { ILayout } from "./types"

const layoutContainers = {
  base: BaseLayout,
}

interface ILayoutFactory extends ILayout {
  type: keyof typeof layoutContainers
}

function Layout({ children, type }: ILayoutFactory) {
  const Container = layoutContainers[type]

  const { loading } = useUserProvider()

  return <div>{loading ? <LoadingPage /> : <Container>{children}</Container>}</div>
}

export default Layout
