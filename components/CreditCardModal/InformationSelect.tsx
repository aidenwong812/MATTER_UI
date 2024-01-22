import { CrossmintPaymentElement } from "@crossmint/client-sdk-react-ui"
import Image from "../../shared/Image"
import DeliveryInformation from "./DeliveryInfomation"
import Input from "../../shared/Input"
import useCrossMintDetail from "../../hooks/useCrossMintDetail"

const InformationSelect = () => {
  const { usdPrice, mintConfig, receiptEmail, setReceiptEmail, handlePayment } = useCrossMintDetail()


  return (
    <div className="bg-white w-full py-[40px] flex flex-col items-center">
      <Image
        link="/images/matter.svg"
        blurLink="/images/matter.svg"
        containerClasses="w-[111px] aspect-[111/26]"
        alt="not found icon"
      />
      <div className="flex items-center mt-[30px]">
        <p className="text-[12px]">Secure checkout powered by</p>
        <Image
          link="/images/stripe.svg"
          blurLink="/images/stripe.png"
          containerClasses="w-[53px] aspect-[53/25]"
          alt="not found icon"
        />
      </div>
      <div className="flex justify-between items-center w-full p-[24px]">
        <p
          className="text-black font-[400] text-[16px] leading-[100%]
                    tracking-[-0.4px]"
        >
          Order Subtotal
        </p>
        <p
          className="text-black font-[400] text-[16px] leading-[100%]
                    tracking-[-0.4px]"
        >
          ${usdPrice}
        </p>
      </div>
      <DeliveryInformation />
      <p
        className="pb-[16px] w-full text-left px-[24px]
                    font-[400] leading-[100%] tracking-[-0.4px] mt-[16px]"
      >
        Card Details
      </p>
      <div className="w-full flex-col items-center flex px-[24px]">
        <Input
          value={receiptEmail}
          className="w-[294px] mb-[0.82rem]"
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
              email: receiptEmail,
            }}
            uiConfig={{
              borderRadius: "8px",
            }}
            onEvent={handlePayment}
          />
        )}
      </div>
    </div>
  )
}

export default InformationSelect
