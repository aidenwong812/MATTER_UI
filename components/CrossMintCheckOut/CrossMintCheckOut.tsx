import { CrossmintPaymentElement } from "@crossmint/client-sdk-react-ui"
import Input from "../../shared/Input"
import useCrossMint from "../../hooks/useCrossMint"
import { useDeliveryForm } from "../../providers/DeliveryFormProvider"

const CrossMintCheckOut = ({ cart, totalPrice }) => {
  const { isCompletedDelivery } = useDeliveryForm()
  const { mintConfig, receiptEmail, setReceiptEmail, handlePayment } = useCrossMint(
    cart,
    totalPrice,
  )

  return (
    <>
      <Input
        value={receiptEmail}
        className="max-w-[294px] mb-[0.82rem]"
        onChange={(e) => setReceiptEmail(e.target.value)}
      />
      {mintConfig && (
        <CrossmintPaymentElement
          mintConfig={mintConfig}
          projectId={process.env.NEXT_PUBLIC_CROSSMINT_PROJECT_ID}
          collectionId={process.env.NEXT_PUBLIC_CROSSMINT_COLLECTION_ID}
          environment="staging"
          paymentMethod="fiat"
          recipient={{
            email: isCompletedDelivery ? receiptEmail : "",
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
