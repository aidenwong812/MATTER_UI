import { base, baseGoerli } from "viem/chains"

export const CHAIN_ID = process.env.NEXT_PUBLIC_TESTNET ? baseGoerli.id : base.id
export const MULTICALL_ADDRESS = "0xcA11bde05977b3631167028862bE2a173976CA11"
export const DROP_ADDRESS = process.env.NEXT_PUBLIC_DROP_CONTRACT
export const MULTICALL_3_ADDRESS = "0xcA11bde05977b3631167028862bE2a173976CA11"
export const MINT_REFERRAL = "0xcfBf34d385EA2d5Eb947063b67eA226dcDA3DC38"
// ERC6551
export const ERC6551_REGISTRY_ADDRESS = "0x02101dfB77FDE026414827Fdc604ddAF224F0921"
export const ERC6551_IMPLEMENTATION_ADDRESS = "0x2d25602551487c3f3354dd80d76d54383a243358"
export const ERC6551_SALT = 0
export const ERC6551_INIT_DATA = "0x8129fc1c"
// 0xSplits
export const SPLIT_MAIN_ADDRESS = "0x2ed6c4B5dA6378c7897AC67Ba9e43102Feb694EE"
export const SPLIT_PERCENTAGE_SCALE = 1000000
export const SPLIT_ADDRESS = process.env.NEXT_PUBLIC_SPLIT
export const USDC_ADDRESS = process.env.NEXT_PUBLIC_USDC
export const USDC_SCALE = 1000000
// BRANDING
export const BRAND_HEX = "#24AACB"
export const BRAND_THEME = "dark"

export const CLIENT_EMAIL = "contact@nftuence.com"
export const SEO_TITLE = "OASIS"
export const SEO_DESCRIPTION = "OASIS"
export const SEO_IMAGE = "/images/logo.png"
