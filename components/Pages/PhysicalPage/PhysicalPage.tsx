import GradientText from "../../GradientText"
import Layout from "../../Layout"
import SeoHead from "../../SeoHead"
import Navbar from "./Navbar"
import ProductItem from "../ProductItem"
import useIsMobile from "../../../hooks/useIsMobile"

const PhysicalPage = () => {
  const isMobile = useIsMobile()

  return (
    <Layout type="base">
      <SeoHead title="Matter | Digital Items" />
      <div
        className="w-full xl:w-[1440px] lg:w-[1280px] md:w-[1024px] min-h-screen
                      md:px-[24px]
                      pt-[90px] pb-[30px]"
      >
        {isMobile ? (
          <p className="text-[28px] leading-[120%] tracking-[-0.168px] text-center">
            Order physical
            <br />
            products.
          </p>
        ) : (
          <GradientText className="text-[70px]">Order physical products on Matter.</GradientText>
        )}
        <Navbar />
        <p
          className="text-[16px] md:text-[28px] leading-[120%] tracking-[-0.168px] text-gray_8 text-left pt-[20px]
        border-t border-t-gray_3 px-[18px]"
        >
          All Digital Items
        </p>
        <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-[40px] mt-[40px] px-[18px]">
          {Array(10)
            .fill(0)
            .map((_, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <ProductItem key={i} />
            ))}
        </div>
      </div>
    </Layout>
  )
}

export default PhysicalPage
