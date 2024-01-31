import { usePrivy } from "@privy-io/react-auth"

const CreateAccountButton = () => {
  const { login } = usePrivy()
  return (
    <button
      type="button"
      className="border border-gray_2 rounded-full
              py-[5px] px-[20px]"
      onClick={login}
    >
      Create Account
    </button>
  )
}

export default CreateAccountButton
