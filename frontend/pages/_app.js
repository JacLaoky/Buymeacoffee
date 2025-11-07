import "@/styles/globals.css";
import { Web3OnboardProvider, init } from '@web3-onboard/react'
import coinbaseWalletModule from "@web3-onboard/coinbase";
import walletConnectModule from "@web3-onboard/walletconnect";
import injectedModule from "@web3-onboard/injected-wallets";
const coinbaseWalletSdk = coinbaseWalletModule();

const walletConnect = walletConnectModule({
  projectId: "9001a48764eeb8f5f6c9bf8270bf964d", // ⬅️ 把这里替换成你的真实 Project ID
  requiredChains: [1001] // 1001 是 Kairos Testnet (0x3e9) 的十进制 ID
});

const injected = injectedModule();
const modules = [coinbaseWalletSdk, walletConnect, injected];

const ETH_MAINNET_RPC_URL = `https://eth-mainnet.g.alchemy.com/v2/demo`;
const KAIA_MAINNET_URL = `https://public-en.node.kaia.io`;
const KAIROS_TESTNET_URL = `https://public-en-kairos.node.kaia.io`;
  const web3Onboard =  init({
    wallets: modules,
    chains: [
      {
        id: "0x1", // chain ID must be in hexadecimal
        token: "ETH",
        namespace: "evm",
        label: "Ethereum Mainnet",
        rpcUrl: ETH_MAINNET_RPC_URL
      },
      {
        id: "0x2019", // chain ID must be in hexadecimal
        token: "KAIA",
        namespace: "evm",
        label: "Kaia Mainnet",
        rpcUrl: KAIA_MAINNET_URL
      },
      {
        id: "0x3e9", // chain ID must be in hexadecimel
        token: "KAIA",
        namespace: "evm",
        label: "Kairos Testnet",
        rpcUrl: KAIROS_TESTNET_URL
      },
     // you can add as much supported chains as possible
    ],
    appMetadata: {
      name: "Buy Me a Coffee DApp", // change to your dApp name
      icon: "/coffee-icon.svg",
      logo: "/coffee-icon.svg",
      description: "Web3Onboard-Kaia",
      recommendedInjectedWallets: [
        { name: "Coinbase", url: "https://wallet.coinbase.com/" },
        { name: "MetaMask", url: "https://metamask.io" }
      ]
    }
  })
export default function App({ Component, pageProps }) {
  return (
    <Web3OnboardProvider web3Onboard={web3Onboard}>
      <Component {...pageProps} />
    </Web3OnboardProvider>
 )
}
