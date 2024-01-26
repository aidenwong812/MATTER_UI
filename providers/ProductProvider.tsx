import React, { createContext, useContext, useMemo } from "react"
import { demoProduct } from "../components/Pages/ProductPage/demoProduct"
import { BigNumber } from "ethers"

const ProductContext = createContext(null)

const ProductProvider = ({ children }) => {
  const product = [demoProduct]
  const productPrice = BigNumber.from(demoProduct.price)

  const value = useMemo(
    () => ({
      product,
      productPrice,
    }),
    [product, productPrice],
  )

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}

export const useProduct = () => {
  const context = useContext(ProductContext)
  if (!context) {
    throw new Error("useProduct must be used within a ProductProvider")
  }
  return context
}

export default ProductProvider
