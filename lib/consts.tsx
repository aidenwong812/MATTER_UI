import { base, baseGoerli } from "viem/chains"
import { NFTStorage } from "nft.storage"

export const CHAIN_ID = process.env.NEXT_PUBLIC_TESTNET ? baseGoerli.id : base.id
export const MULTICALL_ADDRESS = "0xcA11bde05977b3631167028862bE2a173976CA11"
export const DROP_ADDRESS = process.env.NEXT_PUBLIC_DROP_CONTRACT
export const MULTICALL_3_ADDRESS = "0xcA11bde05977b3631167028862bE2a173976CA11"
export const MINT_REFERRAL = "0xcfBf34d385EA2d5Eb947063b67eA226dcDA3DC38"

export const SEO_TITLE = "Matter"
export const SEO_DESCRIPTION = "Matter"
export const SEO_IMAGE = "/images/matter_mini_logo.png"

const FALLBACK_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDU0NUY3MmE2RTE4ZTc1REZBMTA3Qjc3REIzNDM1NDNjOTQzMEI0RmQiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1OTgxNTczNTExMSwibmFtZSI6IlpPUkEtY2F0YWxvZy1mYWN0b3J5In0.I7D79KPJxNELLpi0FIHUbtVm3EtegGK7ALLKTH_pvCg"

export const nftClient = new NFTStorage({
  token: process.env.NEXT_PUBLIC_NFT_STORAGE_API_KEY || FALLBACK_API_KEY,
})

// CHECKOUT
export const GAS_LIMIT_CHECKOUT_PER_ITEM = "175000"
