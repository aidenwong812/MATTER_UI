import handleTxError from "../lib/handleTxError"
import { useCallback, useEffect, useState } from "react"
import { getPermissions } from "../lib/getPermissions"
import { useUserProvider } from "../providers/UserProvider"

const useCheckAdminOrRole = (dropAddress, chainId) => {
  const { connectedWallet } = useUserProvider()

  const [hasMinterRole, setHasMinterRole] = useState(false)
  const [hasAdminRole, setHasAdminRole] = useState(false)

  const checkAdminOrRole = useCallback(async () => {
    try {
      if (!dropAddress || !connectedWallet || !chainId) return

      const response = await getPermissions(dropAddress, connectedWallet, chainId)

      setHasAdminRole(response.adminPermission)
      setHasMinterRole(response.salesPermission)

      return { error: false }
    } catch (err) {
      handleTxError(err)
      return { error: err }
    }
  }, [dropAddress, connectedWallet, chainId])

  useEffect(() => {
    checkAdminOrRole()
  }, [checkAdminOrRole])

  return {
    checkAdminOrRole,
    hasMinterRole,
    hasAdminRole,
  }
}

export default useCheckAdminOrRole
