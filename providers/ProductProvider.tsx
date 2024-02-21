import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"
import { useRouter } from "next/router"
import useNewestProducts from "@/hooks/useNewestProducts"
import createCart from "../lib/firebase/createCart"
import getProductById from "../lib/firebase/getProductById"
import { useUserProvider } from "./UserProvider"

const ProductContext = createContext(null)

const ProductProvider = ({ children }) => {
  const { query, push } = useRouter()
  const productId = query.id
  const [productData, setProductData] = useState(null)
  const [loading, setLoading] = useState(false)
  const { userData } = useUserProvider()
  const newestProducts = useNewestProducts()

  const getProductData = useCallback(async () => {
    if (!productId) return null

    const data = await getProductById(productId)
    setProductData(data)
  }, [productId])

  const addCart = async () => {
    if (!productId && !productData) return

    setLoading(true)
    await createCart({
      productId: productData?.id,
      customerId: productData?.customerId,
      buyerId: userData?.id,
    })
    setLoading(false)
    push("/checkout")
  }

  useEffect(() => {
    getProductData()
  }, [getProductData])

  const value = useMemo(
    () => ({
      addCart,
      productData,
      loading,
      setLoading,
      ...newestProducts,
    }),
    [setLoading, loading, productData, addCart, newestProducts],
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
