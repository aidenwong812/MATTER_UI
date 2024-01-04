import Image from "../../../shared/Image"
import Layout from "../../Layout"

const LandingPage = () => (
  <Layout type="base">
    <div
      className="xl:w-[1440px] lg:w-[1280px] md:w-[1024px] h-screen  
            flex items-center justify-around"
    >
      <div>
        <p className="font-bold text-[80px] leading-[100%]">OASIS</p>
        <p className="text-[29px] text-gray_6">Web Platform</p>
      </div>
      <Image
        link="/images/cover_logo.svg"
        blurLink="/images/cover_logo.png"
        containerClasses="w-[808px] aspect-[808/138]"
        alt="not found"
      />
    </div>
  </Layout>
)

export default LandingPage
