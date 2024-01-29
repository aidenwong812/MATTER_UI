import AccountPage from "../../components/Pages/AccountPage"
import AccountFormProvider from "../../providers/AccountProvider"

const Account = () => (
  <AccountFormProvider>
    <AccountPage />
  </AccountFormProvider>
)

export default Account
