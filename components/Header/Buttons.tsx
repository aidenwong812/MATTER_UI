import { usePrivy } from "@privy-io/react-auth"
import CreateAccountButton from "../CreateAccountButton"
import SignButton from "../SignButton"
import CartButton from "../CartButton"
import EditAccountButton from "../EditAccountButton"

const Buttons = () => {
  const { authenticated } = usePrivy()
  return (
    <div>
      {authenticated ? (
        <>
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
