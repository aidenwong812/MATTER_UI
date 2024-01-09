const getMergedFeed = (editionTokenResponse, response) => {
  const mergedArray = [...editionTokenResponse, ...response]
  const filteredArray = mergedArray.filter((item) => item !== undefined && item !== null)
  filteredArray.sort((a, b) => {
    const blockNumberA = a.type === 1155 ? parseInt(a.blockNumber, 16) : a.blockNumber
    const blockNumberB = b.type === 1155 ? parseInt(b.blockNumber, 16) : b.blockNumber
    return blockNumberA - blockNumberB
  })
  return filteredArray.reverse()
}

export default getMergedFeed
