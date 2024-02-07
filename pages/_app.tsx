import "../styles/globals.css"
import "react-toastify/dist/ReactToastify.css"

import type { AppProps } from "next/app"
import { ToastContainer } from "react-toastify"
import { SessionProvider } from "next-auth/react"
import React from "react"
import { type PrivyClientConfig, PrivyProvider } from "@privy-io/react-auth"
import { ThemeProvider } from "../providers/ThemeProvider"
import UserProvider from "../providers/UserProvider"
import { MatterMarketProvider } from "../providers/MatterMarketProvider"

const privyConfig: PrivyClientConfig = {
  loginMethods: ["email"],
  appearance: {
    theme: "dark",
    accentColor: "#FFFFFF",
    logo: "/images/matter_logo_white.svg",
  },
  embeddedWallets: {
    createOnLogin: "all-users",
  },
  fiatOnRamp: {
    useSandbox: true,
  },
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MatterMarketProvider>
      <ThemeProvider>
        <SessionProvider>
          <PrivyProvider appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID} config={privyConfig}>
            <UserProvider>
              <Component {...pageProps} />
            </UserProvider>
          </PrivyProvider>
          <ToastContainer />
        </SessionProvider>
      </ThemeProvider>
    </MatterMarketProvider>
  )
}
export default MyApp
