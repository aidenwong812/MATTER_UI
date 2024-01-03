/* eslint-disable react/jsx-no-useless-fragment */
import DFooterModule from "./DFooterModule"
import MFooterModule from "./MFooterModule"
import useIsMobile from "../../hooks/useIsMobile"

const Footer = () => {
  const isMobile = useIsMobile()

  return <>{isMobile ? <MFooterModule /> : <DFooterModule />}</>
}
export default Footer
