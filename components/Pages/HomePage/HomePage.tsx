import GradientText from "../../GradientText"
import Layout from "../../Layout"
import SeoHead from "../../SeoHead"
import Navbar from "./Navbar"
import useIsMobile from "../../../hooks/useIsMobile"
import Curated from "./Curated"

const HomePage = () => {
  const isMobile = useIsMobile()

  return (
    <Layout type="base">
      <SeoHead title="Matter | Home" />
      <div
        className="w-full min-h-screen
                      md:px-[24px] lg:px-[32px] xl:px-[40px]
                      pt-[90px] pb-[30px]"
      >
        {isMobile ? (
          <p className="text-[28px] leading-[120%] tracking-[-0.168px] text-center">
            Shop over 1.2 million <br />
            products on blockchain.
          </p>
        ) : (
          <GradientText className="text-[70px]">
            Shop over 1.2 million products on blockchain.
          </GradientText>
        )}
        <Navbar />
        <Curated />
      </div>
    </Layout>
  )
}

export default HomePage
