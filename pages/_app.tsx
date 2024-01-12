import "../styles/globals.css"
import "react-toastify/dist/ReactToastify.css"

import { useLocalStorage } from "usehooks-ts"
import type { AppProps } from "next/app"
import { ToastContainer } from "react-toastify"
import { SessionProvider } from "next-auth/react"
import React, { useMemo } from "react"
import { type PrivyClientConfig, PrivyProvider } from "@privy-io/react-auth"
import { ThemeProvider } from "../providers/ThemeProvider"

function MyApp({ Component, pageProps }: AppProps) {
  const [themeMode] = useLocalStorage<string>("theme", "light")

  const privyConfig: PrivyClientConfig = useMemo(
    () => ({
      loginMethods: ["email", "google", "apple"],
      appearance: {
        theme: themeMode === "light" ? "dark" : "light",
        accentColor: "#FFFFFF",
        logo: themeMode === "light" ? "/images/light_logo.png" : "/images/logo.png",
      },
      embeddedWallets: {
        createOnLogin: "all-users",
      },
      fiatOnRamp: {
        useSandbox: true,
      },
    }),
    [themeMode],
  )

  return (
    <ThemeProvider>
      <SessionProvider>
        <PrivyProvider appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID} config={privyConfig}>
          <Component {...pageProps} />
        </PrivyProvider>
        <ToastContainer />
      </SessionProvider>
    </ThemeProvider>
  )
}
export default MyApp
