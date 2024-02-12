import "../styles/globals.css"
import "react-toastify/dist/ReactToastify.css"

import type { AppProps } from "next/app"
import { ToastContainer } from "react-toastify"
import { SessionProvider } from "next-auth/react"
import React from "react"
import { type PrivyClientConfig, PrivyProvider } from "@privy-io/react-auth"
import { alchemyProvider } from "wagmi/providers/alchemy"
import { publicProvider } from "wagmi/providers/public"
import { configureChains, createConfig, WagmiConfig } from "wagmi"
import {
  base,
  baseGoerli,
  goerli,
  mainnet,
  optimism,
  optimismGoerli,
  zora,
  zoraTestnet,
  sepolia,
} from "@wagmi/core/chains"
import { RainbowKitProvider, getDefaultWallets, connectorsForWallets } from "@rainbow-me/rainbowkit"
import { EthPriceProvider } from "../providers/EthPriceProvider"
import UserProvider from "../providers/UserProvider"
import { ThemeProvider } from "../providers/ThemeProvider"

const myChains = [
  mainnet,
  zora,
  optimism,
  base,
  goerli,
  zoraTestnet,
  optimismGoerli,
  baseGoerli,
  sepolia,
]
const { chains, publicClient, webSocketPublicClient } = configureChains(myChains, [
  alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY }),
  publicProvider(),
])

const { wallets } = getDefaultWallets({
  appName: "Matter",
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
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider modalSize="compact" chains={chains}>
        <EthPriceProvider>
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
        </EthPriceProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
export default MyApp
