import { usePrivy } from "@privy-io/react-auth"

const CreateAccountButton = () => {
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
      className="border border-gray_2 rounded-full
              py-[5px] px-[20px]"
      onClick={handleClick}
    >
      Create Account
    </button>
  )
}

export default CreateAccountButton
