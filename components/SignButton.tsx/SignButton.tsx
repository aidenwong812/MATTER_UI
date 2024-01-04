import { usePrivy } from "@privy-io/react-auth"

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
      className="md:ml-[24px] border border-gray_2 rounded-full
            py-[5px] px-[20px]"
      onClick={handleClick}
    >
      {authenticated ? "Sign Out" : "Sign In"}
    </button>
  )
}

export default SignButton
