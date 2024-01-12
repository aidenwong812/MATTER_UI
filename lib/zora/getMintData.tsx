import { Interface } from "ethers/lib/utils"
import { MINT_REFERRAL } from "../consts"
import zora721Abi from "../abi/zora721drop.json"

const getMintData = (mintTo) =>
  mintTo &&
  new Interface(zora721Abi).encodeFunctionData("mintWithRewards", [
    mintTo,
    1,
    "matter comments",
    MINT_REFERRAL,
  ])

export default getMintData
