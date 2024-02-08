import { SETUP_1155_EVENT_SIGNATURE } from "./consts"

const getCreatedContractAddress = (logs) => {
  let contractAddress = ""

  const logsWithSetupEvent = logs.find((log) => log.topics.includes(SETUP_1155_EVENT_SIGNATURE))

  if (logsWithSetupEvent) {
    const [, contractAddressTopic] = logsWithSetupEvent.topics
    contractAddress = contractAddressTopic.slice(-40)
  }

  return `0x${contractAddress}`
}

export default getCreatedContractAddress
