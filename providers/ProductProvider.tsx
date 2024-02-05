import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"
import createCart from "../lib/firebase/createCart"
import { useRouter } from "next/router"
import getDocument from "../lib/firebase/getDocument"

const ProductContext = createContext(null)

const ProductProvider = ({ children }) => {
  const { query, push } = useRouter()
  const productId = query.id
  const [productData, setProductData] = useState(null)
  const [loading, setLoading] = useState(false)

  const getProductData = useCallback(async () => {
    if (!productId) return null

    const data = await getDocument("products", productId)
    setProductData(data)
  }, [productId])

  const addCart = async () => {
    if (!productId && !productData) return

    setLoading(true)
    await createCart({
      productId: productData?.id,
      customerId: productData?.customerId,
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
    }),
    [setLoading, loading, productData, addCart],
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
