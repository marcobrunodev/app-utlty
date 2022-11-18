import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider
} from '@web3modal/ethereum'

import { chain, configureChains, createClient } from 'wagmi'

const { VITE_WALLETCONNECT_PROJECT_ID } = import.meta.env

console.log('VITE_WALLETCONNECT_PROJECT_ID', VITE_WALLETCONNECT_PROJECT_ID)

const useWallet = () => {
  const chains = [chain.goerli]

  const { provider } = configureChains(chains, [
    walletConnectProvider({ projectId: VITE_WALLETCONNECT_PROJECT_ID })
  ])
  const wagmiClient = createClient({
    autoConnect: true,
    connectors: modalConnectors({ appName: 'web3Modal', chains }),
    provider
  })

  const ethereumClient = new EthereumClient(wagmiClient, chains)

  return { ethereumClient, wagmiClient }
}

export default useWallet
