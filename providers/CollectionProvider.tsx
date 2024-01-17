import { createContext, useContext, useMemo, useState } from "react"
import use1155Drops from "../hooks/use1155Drops"
import useCheckAdminOrRole from "../hooks/useCheckAdminOrRole"
import useConnectedWallet from "../hooks/useConnectedWallet"

const CollectionContext = createContext(null)

const CollectionProvider = ({ children }) => {
  const { connectedWallet } = useConnectedWallet()
  const [selectedDrop, setSelectedDrop] = useState(null)

  const { drops: dropsByConnectedWallet, fetch1155Drops: fetch1155DropByConnectedWallet } =
    use1155Drops(connectedWallet)
  const { hasMinterRole, hasAdminRole, checkAdminOrRole } = useCheckAdminOrRole(
    selectedDrop?.value,
    selectedDrop?.chainId,
  )

  const drops1155 = useMemo(() => {
    return [...dropsByConnectedWallet].sort(
      (a, b) => b.createdAt - a.createdAt,
    )
  }, [dropsByConnectedWallet])

  const dropItems = useMemo(() => {
    return drops1155.map((drop) => ({
      value: drop.address,
      label: drop.name,
      uri: drop?.uri,
      chainId: drop?.chainId,
      createdAt: drop?.createdAt,
    }))
  }, [drops1155])

  const fetch1155Drops = async () => {
    await fetch1155DropByConnectedWallet()
  }

  const value = useMemo(
    () => ({
      drops1155,
      dropItems,
      selectedDrop,
      setSelectedDrop,
      fetch1155Drops,
      hasMinterRole,
      hasAdminRole,
      checkAdminOrRole,
    }),
    [
      drops1155,
      dropItems,
      selectedDrop,
      setSelectedDrop,
      fetch1155Drops,
      hasMinterRole,
      hasAdminRole,
      checkAdminOrRole,
    ],
  )

  return <CollectionContext.Provider value={value}>{children}</CollectionContext.Provider>
}

export const useCollection = () => {
  const context = useContext(CollectionContext)
  if (!context) {
    throw new Error("useCollection must be used within a CollectionProvider")
  }
  return context
}

export default CollectionProvider
