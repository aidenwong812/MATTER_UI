import {
  base,
  baseGoerli,
  goerli,
  mainnet,
  optimism,
  optimismGoerli,
  polygon,
  polygonMumbai,
} from "@wagmi/core/chains"

const ETH = "https://eth-mainnet.g.alchemy.com/"
const GOERLI = "https://eth-goerli.g.alchemy.com/"
const BASE = "https://base-mainnet.g.alchemy.com/"
const BASE_GOERLI = "https://base-goerli.g.alchemy.com/"
const OP = "https://opt-mainnet.g.alchemy.com/"
const OP_GOERLI = "https://opt-goerli.g.alchemy.com/"
const POLYGON = "https://polygon-mainnet.g.alchemy.com/"
const POLYGON_MUMBAI = "https://polygon-mumbai.g.alchemy.com/"

const getAlchemyBaseUrl = (chainId: number) => {
  switch (chainId) {
    case mainnet.id:
      return ETH
    case goerli.id:
      return GOERLI
    case base.id:
      return BASE
    case baseGoerli.id:
      return BASE_GOERLI
    case polygon.id:
      return POLYGON
    case polygonMumbai.id:
      return POLYGON_MUMBAI
    case optimism.id:
      return OP
    case optimismGoerli.id:
      return OP_GOERLI
    default:
      return ETH
  }
}

export default getAlchemyBaseUrl
