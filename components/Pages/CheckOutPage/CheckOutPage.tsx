import useIsMobile from "../../../hooks/useIsMobile"
import Layout from "../../Layout"
import SeoHead from "../../SeoHead"
import CartList from "./CartList"
import CheckOutCard from "./CheckOutCard"

const CheckOutPage = () => {
  const isMobile = useIsMobile()

  return (
    <Layout type="base">
      <SeoHead title="Matter | Cart" />
      <div
        className="w-full xl:w-[1440px] lg:w-[1280px] md:w-[1024px] min-h-screen
                  md:px-[24px] lg:px-[32px] xl:px-[40px] pt-[90px]"
      >
        <div className="w-full md:grid md:grid-cols-12 gap-x-[80px]">
          {!isMobile && <CartList />}
          <CheckOutCard />
          {isMobile && <CartList />}
        </div>
      </div>
    </Layout>
  )
}

export default CheckOutPage
