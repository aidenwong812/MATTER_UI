import { usePrivy, useLogin, type User } from "@privy-io/react-auth"
import { FC } from "react"
import { useRouter } from "next/router"
import Button from "../../shared/Button"

interface LoginButtonProps {
  className?: string
}
const LoginButton: FC<LoginButtonProps> = ({ className }) => {
  const router = useRouter()
  const { logout, user: privyUser, createWallet } = usePrivy()

  const { login } = useLogin({
    onComplete: async (user: User, wasAlreadyAuthenticated: boolean) => {
      if (wasAlreadyAuthenticated && !user.wallet) {
        await createWallet()
      }
    },
  })

  const signOut = async () => {
    await logout()
    router.push("/")
  }

  return (
    <Button
      id="login_btn"
      className={className || ""}
      pulseColor="white"
      onClick={!privyUser ? login : signOut}
    >
      {!privyUser ? "Login" : "Logout"}
    </Button>
  )
}

export default LoginButton
