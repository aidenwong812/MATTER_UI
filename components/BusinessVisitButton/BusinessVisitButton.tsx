import { useRouter } from "next/router"
import Image from "../../shared/Image"

const BusinessVisitButton = () => {
  const { push } = useRouter()
  return (
    <button
      type="button"
      className="border border-gray_2 rounded-full
              py-[5px] px-[20px] flex items-center gap-x-[10px]"
      onClick={() => push("/dashboard")}
    >
      Business Dashboard
      <Image
        link="/images/arrow-right.svg"
        blurLink="/images/arrow-right.png"
        containerClasses="w-[7px] h-[10px]"
        alt="not found icon"
      />
    </button>
  )
}

export default BusinessVisitButton
