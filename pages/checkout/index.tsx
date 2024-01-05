import CheckOutPage from "../../components/Pages/CheckOutPage"
import CheckOutProvider from "../../providers/CheckOutProvider"

const CheckOut = () => (
  <CheckOutProvider>
    <CheckOutPage />
  </CheckOutProvider>
)

export default CheckOut
