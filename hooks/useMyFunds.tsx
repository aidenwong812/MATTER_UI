import useAvailableRewards from "./useAvailableRewards"
import useBalance from "./useBalance"
import useMyNfts from "./useMyNfts"

const useMyFunds = () => {
  const { ownedNfts, tokenIds } = useMyNfts()
  const availableRewards = useAvailableRewards(tokenIds)
  const availableEth = useBalance(availableRewards.smartWallets[0])

  return {
    total: ownedNfts.length * 1500,
    ...availableEth,
    ...availableRewards,
    tokenIds,
  }
}

export default useMyFunds
