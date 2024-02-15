import Image from "@/shared/Image"
import { useRouter } from "next/router"

const VisitBusinessDashboard = () => {
  const { push } = useRouter()

  return (
    <div
      className="w-full md:w-[375px] shadow-gray_shadow rounded-[10px]
              py-[40px] px-[26px] flex flex-col items-center bg-white"
    >
      <div className="flex gap-x-[10px] items-center">
        <Image
          link="/images/matter_mini_logo_black.svg"
          blurLink="/images/matter_mini_logo_black.png"
          containerClasses="w-[19px] aspect-[19/14]"
          alt="not found icon"
        />
        <p className="tracking-[6px] font-[400] text-[12px] leading-[120%]">BUSINESS</p>
      </div>
      <p
        className="text-[28px] font-[400] leading-[110%] tracking-[-0.7px]
                  my-[24px] text-center"
      >
        Looking to view your sales and analytics?
      </p>
      <button
        type="button"
        className="border border-gray_2 rounded-full
                              py-[10px] px-[20px]"
        onClick={() => push("/dashboard")}
      >
        Visit your Business Dashboard
      </button>
    </div>
  )
}

export default VisitBusinessDashboard
