import axios from "axios"

const getUsers = async () => {
  const url = "https://auth.privy.io/api/v1/users"
  const appId = process.env.NEXT_PUBLIC_PRIVY_APP_ID
  const appPassword = process.env.NEXT_PUBLIC_PRIVY_APP_SECRET
  const encoded = btoa(`${appId}:${appPassword}`)
  const Authorization = `Basic ${encoded}`

  const response = await axios.get(url, {
    headers: {
      Authorization,
      "privy-app-id": appId,
    },
    params: {},
  })

  return response.data.data
}

export default getUsers
