import BaseLayout from "./BaseLayout"
import FullLayout from "./FullLayout"
import RowLayout from "./RowLayout"
import { ILayout } from "./types"

const layoutContainers = {
  base: BaseLayout,
  full: FullLayout,
  row: RowLayout,
}

interface ILayoutFactory extends ILayout {
  type: keyof typeof layoutContainers
}

function Layout({ children, type }: ILayoutFactory) {
  const Container = layoutContainers[type]

  return <Container>{children}</Container>
}

export default Layout
