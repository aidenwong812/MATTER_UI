import axios from "axios"
import getOwnersForCollection from "./alchemy/getOwnersForCollection"
import getEmailsFromOwners from "./privy/getEmailsFromOwners"
import getUsers from "./privy/getUsers"

const sendDistributionEmail = async (amount) => {
  const response = await getOwnersForCollection(process.env.NEXT_PUBLIC_DROP_CONTRACT)
  const privyResponse = await getUsers()
  const emails = getEmailsFromOwners(response, privyResponse)
  await axios.get(`/api/email/send?amountUsdc=${amount}&emails=${emails}`)
}

export default sendDistributionEmail
