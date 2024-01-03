import { SPLIT_PERCENTAGE_SCALE } from "../consts"

const getPercentAllocations = (numberOfRecipients) => {
  if (numberOfRecipients === 0) return []

  const baseAllocation = Math.floor(SPLIT_PERCENTAGE_SCALE / numberOfRecipients)
  const modulus = SPLIT_PERCENTAGE_SCALE % numberOfRecipients
  const allocations = new Array(numberOfRecipients).fill(baseAllocation)
  allocations[0] += modulus
  return allocations
}

export default getPercentAllocations
