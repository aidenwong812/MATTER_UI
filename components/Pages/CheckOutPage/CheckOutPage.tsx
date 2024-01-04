import Layout from "../../Layout"
import SeoHead from "../../SeoHead"
import CartList from "./CartList"
import CheckOutCard from "./CheckOutCard"

const CheckOutPage = () => (
  <Layout type="base">
    <SeoHead title="OASIS | Cart" />
    <div
      className="xl:w-[1440px] lg:w-[1280px] md:w-[1024px] h-screen
                pt-[90px]"
    >
      <div className="w-full grid grid-cols-12 gap-x-[80px]">
        <CartList />
        <CheckOutCard />
      </div>
    </div>
  </Layout>
)

export default CheckOutPage
