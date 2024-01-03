import React from "react"
import { ILayout } from "./types"
import Header from "../Header"
import Footer from "../Footer"
import SeoHead from "../SeoHead"

function BaseLayout({ children }: ILayout) {
  return (
    <div
      className="w-screen min-h-screen
      relative
      flex flex-col items-center
      bg-white dark:bg-[#10181A]
      overflow-x-hidden"
    >
      <Header type="base" />
      <SeoHead
        title="Financial Verse"
        description="Discover a new era of Web3 investing with Financial Verse. Gain access to live trading lessons, top traders, premium investment insights, and educational videos. Revolutionize your investment journey with value, utility, and practicality. Start maximizing the potential of your Web 3 tokens today."
        image="/images/seo_logo.png"
      />
      <div className="w-full">{children}</div>
      <Footer />
    </div>
  )
}

export default BaseLayout
