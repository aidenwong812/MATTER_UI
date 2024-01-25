import "../styles/globals.css"
import "react-toastify/dist/ReactToastify.css"

import { useLocalStorage } from "usehooks-ts"
import type { AppProps } from "next/app"
import { ToastContainer } from "react-toastify"
import { SessionProvider } from "next-auth/react"
import React, { useMemo } from "react"
import { type PrivyClientConfig, PrivyProvider } from "@privy-io/react-auth"
import { ThemeProvider } from "../providers/ThemeProvider"
import UserProvider from "../providers/UserProvider"

function MyApp({ Component, pageProps }: AppProps) {
  const [themeMode] = useLocalStorage<string>("theme", "light")

  const privyConfig: PrivyClientConfig = useMemo(
    () => ({
      loginMethods: ["email"],
      appearance: {
        theme: themeMode === "light" ? "dark" : "light",
        accentColor: "#FFFFFF",
        logo:
          themeMode === "light" ? "/images/matter_logo_white.png" : "/images/matter_logo_white.png",
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
        <UserProvider>
          <PrivyProvider appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID} config={privyConfig}>
            <Component {...pageProps} />
          </PrivyProvider>
        </UserProvider>
        <ToastContainer />
      </SessionProvider>
    </ThemeProvider>
  )
}
export default MyApp
