import { BigNumber } from "ethers"
import { toUtf8String } from "ethers/lib/utils"

const getMapped1155TokenBatch = (batchResults, all1155Contracts) => {
  const drops = batchResults.map(
    (logs, index) =>
      logs &&
      logs.map((log) => {
        const { data, blockNumber, topics } = log
        const tokenId = BigNumber.from(topics[1]).toString()
        const newURI = (() => {
          const offset = parseInt(data.slice(0, 66), 16) * 2
          const newURILength = parseInt(data.slice(offset, offset + 64), 16) * 2
          const newURIHex = data.slice(offset + 64, offset + 64 + newURILength)
          const trimmedHex = newURIHex.replace(/00+$/, "") // trim the zeros from the right

          try {
            return toUtf8String(`0x${trimmedHex}`).substring(1)
          } catch (error) {
            // eslint-disable-next-line no-console
            console.error("Error decoding string for log:", log)
            return null
          }
        })()

        return {
          contractAddress: all1155Contracts[index].contractAddress,
          contractName: all1155Contracts[index].contractName,
          uri: newURI,
          tokenId,
          blockNumber,
          type: 1155,
        }
      }),
  )
  return [].concat(...drops)
}

export default getMapped1155TokenBatch
