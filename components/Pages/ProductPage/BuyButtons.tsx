import usePurchaseByPrivy from "../../../hooks/usePurchaseByPrivy"
import { useProduct } from "../../../providers/ProductProvider"
import Image from "../../../shared/Image"
import CreditCardPayButton from "../../CreditCardPayButton"

const BuyButtons = () => {
  const { product, productPrice } = useProduct()
  const { purchaseByPrivy } = usePurchaseByPrivy()

  const handleCryptoPurchase = async () => {
    await purchaseByPrivy(product, productPrice)
  }

  return (
    <div className="w-full">
      <div
        className="flex flex-col items-center border-0 md:border md:border-gray_3 rounded-[20px]
            md:px-[24px] py-[32px] bg-white"
      >
        <button
          type="button"
          className="w-[327px] h-[56px] bg-black rounded-full
            flex gap-x-[10px] items-center justify-center"
          onClick={handleCryptoPurchase}
        >
          <Image
            link="/images/matter_mini_logo.svg"
            blurLink="/images/matter_mini_logo.png"
            containerClasses="w-[19px] h-[14px]"
            alt="not found icon"
          />
          <p className="text-white text-[16px] font-[400] leading-[120%]">Buy with Crypto</p>
        </button>{" "}
        <p
          className="text-black text-[16px] font-[400] leading-[150%] tracking-[-0.684px]
            text-center my-[20px]"
        >
          Or
        </p>
        <CreditCardPayButton
          cart={product}
          totalPrice={productPrice}
          buttonLabel="Buy with Credit or Debit"
        />
      </div>
    </div>
  )
}

export default BuyButtons
