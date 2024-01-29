import { base, baseGoerli } from "viem/chains"
import { keccak256, toUtf8Bytes } from "ethers/lib/utils"

export const CHAIN_ID = process.env.NEXT_PUBLIC_TESTNET ? baseGoerli.id : base.id
export const MULTICALL_ADDRESS = "0xcA11bde05977b3631167028862bE2a173976CA11"
export const DROP_ADDRESS = process.env.NEXT_PUBLIC_DROP_CONTRACT
export const MULTICALL_3_ADDRESS = "0xcA11bde05977b3631167028862bE2a173976CA11"
export const MINT_REFERRAL = "0xcfBf34d385EA2d5Eb947063b67eA226dcDA3DC38"

export const SEO_TITLE = "Matter"
export const SEO_DESCRIPTION = "Matter"
export const SEO_IMAGE = "/images/matter_mini_logo.png"

export const SETUP_1155_EVENT_SIGNATURE =
  "0xa45800684f65ae010ceb4385eceaed88dec7f6a6bcbe11f7ffd8bd24dd2653f4"
export const SETUP_1155_TOKEN_EVENT_SIGNATURE = keccak256(
  toUtf8Bytes("SetupNewToken(uint256,address,string,uint256)"),
)
export const zoraFee = "777000000000000"

// CHECKOUT
export const GAS_LIMIT_CHECKOUT_PER_ITEM = "175000"
