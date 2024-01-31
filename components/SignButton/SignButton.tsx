import { usePrivy } from "@privy-io/react-auth"
import Icon from "../../shared/Icon"

const SignButton = () => {
  const { authenticated, logout, login } = usePrivy()

  const handleClick = () => {
    if (authenticated) {
      logout()
      return
    }

    login()
  }

  return (
    <button
      type="button"
      className="md:ml-[24px] rounded-full
            py-[5px] px-[20px]"
      onClick={handleClick}
    >
      {authenticated ? <Icon name="exit" /> : "Log In"}
    </button>
  )
}

export default SignButton
