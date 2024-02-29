import { ONE_DAY_MILLISECONDS } from "./consts"

const getStartDate = (selectedPeriod): number => {
  const fromDate = new Date().setHours(0, 0, 0, 0)
  switch (selectedPeriod) {
    case "yesterday":
      return fromDate - 2 * ONE_DAY_MILLISECONDS
    case "past-7-days":
      return fromDate - 7 * ONE_DAY_MILLISECONDS
    case "past-30-days":
      return fromDate - 30 * ONE_DAY_MILLISECONDS
    case "past-3-months":
      return fromDate - 3 * 30 * ONE_DAY_MILLISECONDS
    case "past-12-months":
      return fromDate - 12 * 30 * ONE_DAY_MILLISECONDS
    default:
      return fromDate
  }
}

export default getStartDate
