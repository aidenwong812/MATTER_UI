import React from "react"
import { ILayout } from "./types"
import Header from "../Header"
import Footer from "../Footer"
import SeoHead from "../SeoHead"

function FullLayout({ children }: ILayout) {
  return (
    <div
      className="w-screen min-h-screen
      relative
      flex flex-col items-center
      bg-[url('/images/mobile_background.png')]
      md:bg-[url('/images/background.png')]
      bg-white
      bg-cover
      bg-[top_center]
      bg-[100%_auto]
      overflow-x-hidden"
    >
      <Header type="base" />
      <SeoHead
        title="Financial Verse"
        description="Discover a new era of Web3 investing with Financial Verse. Gain access to live trading lessons, top traders, premium investment insights, and educational videos. Revolutionize your investment journey with value, utility, and practicality. Start maximizing the potential of your Web 3 tokens today."
        image="/images/seo_logo.png"
      />
      {children}
      <Footer />
    </div>
  )
}

export default FullLayout
