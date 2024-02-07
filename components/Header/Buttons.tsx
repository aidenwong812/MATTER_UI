import { usePrivy } from "@privy-io/react-auth"
import CreateAccountButton from "../CreateAccountButton"
import SignButton from "../SignButton"
import CartButton from "../CartButton"
import EditAccountButton from "../EditAccountButton"
import { useUserProvider } from "../../providers/UserProvider"
import BusinessVisitButton from "../BusinessVisitButton"

const Buttons = () => {
  const { authenticated } = usePrivy()
  const { userData } = useUserProvider()

  return (
    <div className="flex items-center">
      {authenticated ? (
        <>
          {userData?.business && <BusinessVisitButton />}
          <CartButton />
          <EditAccountButton />
        </>
      ) : (
        <>
          <SignButton />
          <CreateAccountButton />
        </>
      )}
    </div>
  )
}

export default Buttons
