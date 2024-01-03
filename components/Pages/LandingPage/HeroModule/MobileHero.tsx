import { useRouter } from "next/router"
import Button from "../../../../shared/Button"
import Media from "../../../../shared/Media"

const MobileHero = () => {
  const router = useRouter()

  return (
    <div
      className={`bg-[url('/images/Landing/Hero/m_invest_bg.png')]
            flex justify-center flex-col
            h-[320px] w-screen mt-[64px]
            bg-[bottom_center] px-[20px]
            bg-cover relative 
            overflow-hidden dark:overflow-visible`}
    >
      <Media
        type="image"
        link="/images/Landing/Hero/top_dot_bg.png"
        blurLink="/images/Landing/Hero/top_dot_bg.png"
        containerClasses="w-[110px] h-[97px]
                !absolute left-[0px] top-[-70px]"
      />
      <Media
        type="image"
        link="/images/Landing/Hero/bottom_dot_bg.png"
        blurLink="/images/Landing/Hero/bottom_dot_bg.png"
        containerClasses="w-[56px] h-[109px]
                right-0 bottom-[-60px] !absolute"
      />
      <pre
        className="font-poppins text-[30px] text-white
            font-bold leading-[120%]"
      >
        {`The Biggest\nFinancial\nEcosystem\nIn Web3`}
      </pre>
      <Button
        id="invest_btn"
        className="cursor-pointer mt-[30px]
                font-poppins_semibold !text-[14px]
                !text-white !bg-[#54B3C3]
                !w-[132px] !h-[35px]"
        onClick={() => router.push("/invest")}
        data-aos="fade-up"
      >
        Invest Now
      </Button>
    </div>
  )
}

export default MobileHero
