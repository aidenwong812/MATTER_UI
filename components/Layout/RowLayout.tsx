import React from "react"
import { ILayout } from "./types"
import SeoHead from "../SeoHead"
import SideMenu from "../SideMenu"

function RowLayout({ children }: ILayout) {
  return (
    <div
      className="max-w-screen min-h-screen
      relative
      flex 
      bg-white dark:bg-[#10181A]
      overflow-x-hidden"
    >
      <SeoHead
        title="Financial Verse"
        description="Discover a new era of Web3 investing with Financial Verse. Gain access to live trading lessons, top traders, premium investment insights, and educational videos. Revolutionize your investment journey with value, utility, and practicality. Start maximizing the potential of your Web 3 tokens today."
        image="/images/seo_logo.png"
      />
      <SideMenu />
      <div
        className="flex-grow h-screen
      overflow-y-auto overflow-x-hidden"
      >
        {children}
      </div>
    </div>
  )
}

export default RowLayout
