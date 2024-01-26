import ProductPage from "../../components/Pages/ProductPage"
import ProductProvider from "../../providers/ProductProvider"

const Product = () => (
  <ProductProvider>
    <ProductPage />
  </ProductProvider>
)

export default Product
