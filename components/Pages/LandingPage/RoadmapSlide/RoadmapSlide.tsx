import { useRouter } from "next/router"
import Button from "../../../../shared/Button"
import Media from "../../../../shared/Media"
import Content from "../../../Layout/Content"

const RoadmapSlide = () => {
  const router = useRouter()

  return (
    <Content>
      <div className="grid grid-cols-12">
        <div className="flex flex-col justify-center gap-y-[40px] col-span-5">
          <pre
            className="xl:text-[64px] lg:text-[51.2px] md:text-[38.4px]
                        font-poppins_bold text-white
                        leading-[130%]"
            data-aos="fade-up"
          >
            {`The Biggest\nFinancial\nEcosystem\nIn Web3`}
          </pre>
          <Button
            id="invest_btn"
            className="cursor-pointer
                        font-poppins_semibold
                        text-[6.5px] samsungS8:text-[7.3px] xs:text-[8px] md:text-[18px]
                        !rounded-full
                        !border !border-[#54B3C3]
                        bg-[white] !text-[#54B3C3]
                        lg:w-[180px] lg:h-[47px]
                        md:w-[135px] md:h-[35.25px]"
            onClick={() => router.push("/invest")}
            data-aos="fade-up"
          >
            Invest
          </Button>
        </div>
        <div className="col-span-7">
          <Media
            type="image"
            link="/images/Landing/Hero/roadmap.svg"
            blurLink="/images/Landing/Hero/roadmap.png"
            containerClasses="translate-y-[30px]
              xl:w-[650px] lg:w-[520px] md:w-[390px]
              aspect-[759/819]"
          />
        </div>
      </div>
    </Content>
  )
}

export default RoadmapSlide
