import { useMatterMarket } from "@/providers/MatterMarketProvider"
import GradientText from "../../GradientText"
import Layout from "../../Layout"
import SeoHead from "../../SeoHead"
import Navbar from "./Navbar"
import ProductItem from "../ProductItem"
import useIsMobile from "../../../hooks/useIsMobile"

const DigitalPage = () => {
  const isMobile = useIsMobile()
  const { filteredProducts } = useMatterMarket()

  return (
    <Layout type="base">
      <SeoHead title="Matter | Digital Items" />
      <div
        className="w-full xl:w-[1440px] lg:w-[1280px] md:w-[1024px] min-h-screen
                      md:px-[24px] lg:px-[32px] xl:px-[40px]
                      pt-[90px] pb-[30px]"
      >
        {isMobile ? (
          <p className="text-[28px] leading-[120%] tracking-[-0.168px] text-center">
            Shop digital items <br />
            on Matter.
          </p>
        ) : (
          <GradientText className="text-[70px]">Shop digital items on Matter.</GradientText>
        )}
        <Navbar />
        <p
          className="text-[16px] md:text-[28px] leading-[120%] tracking-[-0.168px] text-gray_8 text-left pt-[20px]
        border-t border-t-gray_3 px-[18px]"
        >
          All Digital Items
        </p>
        <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-[40px] mt-[40px] px-[18px]">
          {filteredProducts.map((product, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <ProductItem key={i} data={product} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default DigitalPage
