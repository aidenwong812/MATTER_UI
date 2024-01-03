import BaseHeader from "./BaseHeader"
import AuthenticatedHeader from "./AuthenticatedHeader"

const headerContainers = {
  base: BaseHeader,
  authenticated: AuthenticatedHeader,
}

interface IHeaderFactory {
  type: keyof typeof headerContainers
}

function Header({ type }: IHeaderFactory) {
  const Container = headerContainers[type]

  return <Container />
}

export default Header
