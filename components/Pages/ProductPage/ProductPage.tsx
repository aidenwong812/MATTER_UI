import Layout from "../../Layout"
import SeoHead from "../../SeoHead"
import CartButton from "./CartButton"
import ProductDetail from "./ProductDetail"
import ProductPhoto from "./ProductPhoto"
import ProductTrending from "./ProductTrending"
import SellerInfo from "./SellerInfo"

const ProductPage = () => (
  <Layout type="base">
    <SeoHead title="Matter | Product" />
    <div
      className="w-full xl:w-[1440px] lg:w-[1280px] md:w-[1024px] min-h-screen
                  md:px-[24px] lg:px-[32px] xl:px-[40px] pt-[90px] pb-[30px] px-[18px]"
    >
      <div className="w-full md:grid md:grid-cols-10 gap-x-[40px] mt-[39px]">
        <ProductPhoto />
        <ProductDetail />
        <div className="col-span-10 md:col-span-3 flex flex-col gap-y-[10px]">
          <CartButton />
          <SellerInfo />
        </div>
        <ProductTrending />
      </div>
    </div>
  </Layout>
)

export default ProductPage
