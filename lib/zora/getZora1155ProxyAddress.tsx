import {
  base,
  goerli,
  mainnet,
  optimism,
  optimismGoerli,
  sepolia,
  zora,
  zoraTestnet,
} from "viem/chains"

const DETERMINISTIC_FACTORY = "0x777777C338d93e2C7adf08D102d45CA7CC4Ed021"
const OP_MAINNET = "0x78b524931e9d847c40BcBf225c25e154a7B05fDA"
const GOERLI_TESTNET = "0x8732b4bCa198509bB9c40f9a24638Be1eaB7D30c"
const OP_TESTNET = "0xb0C56317E9cEBc6E0f7A59458a83D0A9ccC3e955"

const getZora1155ProxyAddress = (chainId) => {
  if (chainId === mainnet.id) {
    return DETERMINISTIC_FACTORY
  }
  if (chainId === zora.id) {
    return DETERMINISTIC_FACTORY
  }
  if (chainId === optimism.id) {
    return OP_MAINNET
  }
  if (chainId === base.id) {
    return DETERMINISTIC_FACTORY
  }
  if (chainId === goerli.id) {
    return GOERLI_TESTNET
  }
  if (chainId === zoraTestnet.id) {
    return DETERMINISTIC_FACTORY
  }
  if (chainId === optimismGoerli.id) {
    return OP_TESTNET
  }
  if (chainId === sepolia.id) {
    return DETERMINISTIC_FACTORY
  }
  return DETERMINISTIC_FACTORY
}

export default getZora1155ProxyAddress
