const ETH_MAINNET = "0x777777C338d93e2C7adf08D102d45CA7CC4Ed021"
const ZORA_MAINNET = "0x777777C338d93e2C7adf08D102d45CA7CC4Ed021"
const OP_MAINNET = "0x78b524931e9d847c40BcBf225c25e154a7B05fDA"
const BASE_MAINNET = "0x777777C338d93e2C7adf08D102d45CA7CC4Ed021"
const GOERLI_TESTNET = "0x8732b4bCa198509bB9c40f9a24638Be1eaB7D30c"
const ZORA_TESTNET = "0x777777C338d93e2C7adf08D102d45CA7CC4Ed021"
const OP_TESTNET = "0xb0C56317E9cEBc6E0f7A59458a83D0A9ccC3e955"
const BASE_TESTNET = "0x9168C5ba5a0a76db8A1BF5b2eE5557f2A0ECA4f4"

const getZora1155ProxyAddress = (chainId) => {
  if (chainId === 1) {
    return ETH_MAINNET
  }
  if (chainId === 7777777) {
    return ZORA_MAINNET
  }
  if (chainId === 10) {
    return OP_MAINNET
  }
  if (chainId === 8453) {
    return BASE_MAINNET
  }
  if (chainId === 5) {
    return GOERLI_TESTNET
  }
  if (chainId === 999) {
    return ZORA_TESTNET
  }
  if (chainId === 420) {
    return OP_TESTNET
  }
  if (chainId === 84531) {
    return BASE_TESTNET
  }
  return ETH_MAINNET
}

export default getZora1155ProxyAddress
