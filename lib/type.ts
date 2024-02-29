export type AlchemyParamsType = [
  {
    fromBlock: string
    toBlock: string
    category: string[]
    withMetadata: boolean
    excludeZeroValue: boolean
    fromAddress?: string
    toAddress?: string
  },
]
