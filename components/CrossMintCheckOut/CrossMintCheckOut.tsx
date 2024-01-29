import { CrossmintPaymentElement } from "@crossmint/client-sdk-react-ui"
import Input from "../../shared/Input"
import useCrossMint from "../../hooks/useCrossMint"

const CrossMintCheckOut = ({ cart, totalPrice }) => {
  const { mintConfig, receiptEmail, setReceiptEmail, handlePayment } = useCrossMint({
    cart,
    totalPrice,
  })

  return (
    <>
      <Input
        value={receiptEmail}
        className="w-[294px] mb-[0.82rem]"
        onChange={(e) => setReceiptEmail(e.target.value)}
      />
      {mintConfig && receiptEmail && (
        <CrossmintPaymentElement
          mintConfig={mintConfig}
          projectId={process.env.NEXT_PUBLIC_CROSSMINT_PROJECT_ID}
          collectionId={process.env.NEXT_PUBLIC_CROSSMINT_COLLECTION_ID}
          environment="staging"
          paymentMethod="fiat"
          recipient={{
            email: receiptEmail,
          }}
          uiConfig={{
            borderRadius: "8px",
          }}
          onEvent={handlePayment}
        />
      )}
    </>
  )
}

export default CrossMintCheckOut
