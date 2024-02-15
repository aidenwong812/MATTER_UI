import removeCart from "../../../lib/firebase/removeCart"
import { useCheckOut } from "../../../providers/CheckOutProvider"

const RemoveCartButton = ({ cartId }) => {
  const { getCarts } = useCheckOut()

  const handleRemove = async () => {
    await removeCart(cartId)
    getCarts()
  }
  return (
    <button
      type="button"
      className="text-link text-[16px] font-hedvig tracking-[-0.4px] leading-[100%] font-[400]"
      onClick={handleRemove}
    >
      Remove
    </button>
  )
}

export default RemoveCartButton
