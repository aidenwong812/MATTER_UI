import "../styles/globals.css"
import "@rainbow-me/rainbowkit/styles.css"
import "react-toastify/dist/ReactToastify.css"

import { useLocalStorage } from "usehooks-ts"
import type { AppProps } from "next/app"
import { RainbowKitProvider, getDefaultWallets, connectorsForWallets } from "@rainbow-me/rainbowkit"
import { configureChains, createConfig, WagmiConfig } from "wagmi"
import { goerli, mainnet } from "@wagmi/core/chains"
import { ToastContainer } from "react-toastify"
import { SessionProvider } from "next-auth/react"
import React, { useMemo } from "react"
import { alchemyProvider } from "wagmi/providers/alchemy"
import { publicProvider } from "wagmi/providers/public"
import { type PrivyClientConfig, PrivyProvider } from "@privy-io/react-auth"

import { ThemeProvider } from "../providers/ThemeProvider"
import UserProvider from "../providers/UserProvider"

const myChains = [process.env.NEXT_PUBLIC_TESTNET ? goerli : mainnet]
const { chains, publicClient, webSocketPublicClient } = configureChains(myChains, [
  alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY }),
  publicProvider(),
])

const { wallets } = getDefaultWallets({
  appName: "OASIS",
  projectId: "68c5ce6a0bf63be0182de421f19951b8",
  chains,
})

const connectors = connectorsForWallets(wallets)
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
})

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
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider modalSize="compact" chains={chains}>
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
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
export default MyApp
