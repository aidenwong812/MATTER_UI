import { nftClient } from "./consts"

const uploadPfpToIpfs = async (pfpFile) => {
  try {
    const cid = await nftClient.storeBlob(pfpFile)

    return `ipfs://${cid}`
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error in uploading image to IPFS:", error)
    throw error
  }
}

export default uploadPfpToIpfs
