import React from "react"
import Button from "../../shared/Button"
import { useDistributeProvider } from "../../providers/DistributeProvider"

const DistributeTxModal = () => {
  const { amount, distribute, step, errorText } = useDistributeProvider()

  const getLabel = () => {
    switch (step) {
      case 1:
        return `Sending ${amount} USDC to 0xSplits`
      case 2:
        return "Updating Split & Distributing Funds"
      case 3:
        return "Withdrawing funds to investors' smart wallets"
      default:
        return ""
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-96 text-center">
        <h2 className="text-xl font-bold mb-4">Distribution in Progress</h2>
        <p className="mb-4">{getLabel()}</p>
        {!errorText && <p className="mb-4">Signing step {step} of 3</p>}
        {errorText && (
          <div className="mb-4">
            <p className="text-red-600 mb-2">Transaction failed</p>
            <Button
              id="retry"
              onClick={distribute}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Retry
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default DistributeTxModal
