import { useState } from "react"
import GradientText from "../../GradientText"
import Layout from "../../Layout"
import SeoHead from "../../SeoHead"
import Navbar from "./Navbar"
import useIsMobile from "../../../hooks/useIsMobile"
import Curated from "./Curated"
import data from "./data.json"
import Trending from "./Trending"
import Newest from "./Newest"

const HomePage = () => {
  const isMobile = useIsMobile()
  const [selectedTab, setSelectedTab] = useState(data[0].value)

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
            Shop products and
            <br />
            services.
          </p>
        ) : (
          <GradientText className="text-[70px]">Shop products and services.</GradientText>
        )}
        <Navbar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        {selectedTab === data[0].value && <Curated />}
        {selectedTab === data[1].value && <Trending />}
        {selectedTab === data[2].value && <Newest />}
      </div>
    </Layout>
  )
}

export default HomePage
