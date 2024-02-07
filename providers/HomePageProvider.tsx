import { createContext, useContext, useMemo } from "react"
import useTrendingProducts from "../hooks/useTrendingProducts"
import useNewestProducts from "../hooks/useNewestProducts"

const HomePageContext = createContext({} as any)

export const useHomeProducts = () => useContext(HomePageContext)

export const HomePageProvider = ({ children }) => {
  const trendingProducts = useTrendingProducts()
  const newestProducts = useNewestProducts()

  const value = useMemo(
    () => ({
      ...trendingProducts,
      ...newestProducts,
    }),
    [trendingProducts, newestProducts],
  )

  return <HomePageContext.Provider value={value}>{children}</HomePageContext.Provider>
}
