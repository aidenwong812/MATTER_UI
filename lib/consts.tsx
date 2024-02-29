import { base, sepolia } from "viem/chains"
import { keccak256, toUtf8Bytes } from "ethers/lib/utils"

export const IS_TESTNET = process.env.NEXT_PUBLIC_TESTNET
export const CHAIN = IS_TESTNET ? sepolia : base
export const CHAIN_ID = CHAIN.id
export const MULTICALL_ADDRESS = "0xcA11bde05977b3631167028862bE2a173976CA11"
export const MULTICALL_3_ADDRESS = "0xcA11bde05977b3631167028862bE2a173976CA11"
export const MINT_REFERRAL = "0xcfBf34d385EA2d5Eb947063b67eA226dcDA3DC38"
export const MINTER_ADDRESS = process.env.NEXT_PUBLIC_FIXED_PRICE_SALE_STRATEGY
export const USDC_ADDRESS = process.env.NEXT_PUBLIC_USDC_CONTRACT
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

export const productTypes = [
  {
    label: "Physical Product",
    value: "Physical",
  },
  {
    label: "Digital Product",
    value: "Digital",
  },
  {
    label: "Service",
    value: "Service",
  },
]

export const serviceCategories = [
  { label: "Transportation", value: "Transportation" },
  { label: "Medical", value: "Medical" },
  { label: "Home Repair", value: "HomeRepair" },
  { label: "Food", value: "Food" },
  { label: "Automotive", value: "Automotive" },
  { label: "Beauty", value: "Beauty" },
  { label: "Technology", value: "Technology" },
  { label: "Pet", value: "Pet" },
  { label: "Marketing", value: "Marketing" },
  { label: "Other", value: "Other" },
]

export const digitalCategories = [
  { label: "Music", value: "Music" },
  { label: "Ebooks", value: "Ebooks" },
  { label: "Video Games", value: "VideoGames" },
  { label: "Apps", value: "Apps" },
  { label: "Movies & TV", value: "MoviesTV" },
  { label: "Art", value: "Art" },
  { label: "Courses", value: "Courses" },
  { label: "Tickets", value: "Tickets" },
  { label: "Collectibles", value: "Collectibles" },
  { label: "Other", value: "Other" },
]

export const physicalCategories = [
  { label: "Apparel", value: "Apparel" },
  { label: "Home & Kitchen", value: "HomeKitchen" },
  { label: "Furniture", value: "Furniture" },
  { label: "Toys & Games", value: "ToysGames" },
  { label: "Beauty", value: "Beauty" },
  { label: "Books", value: "Books" },
  { label: "Jewelry & Watches", value: "JewelryWatches" },
  { label: "Pet Supplies", value: "PetSupplies" },
  { label: "Other", value: "Other" },
]

export const ONE_DAY_MILLISECONDS = 24 * 60 * 60 * 1000
export const ONE_HOUR_MILLISECONDS = 60 * 60 * 1000
export const TOTAL_DAYS_PER_WEEK = 7

export const ALCHEMY_API_KEY = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY
export const ALCHEMY_ENDPOINT = `https://${
  IS_TESTNET ? "opt-goerli" : "base-mainnet"
}.g.alchemy.com/v2/${ALCHEMY_API_KEY}`
