import { useRouter } from "next/router"

const CreateAccountButton = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push("/account")
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
