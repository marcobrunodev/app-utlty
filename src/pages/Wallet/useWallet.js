import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider
} from '@web3modal/ethereum'

import { chain, configureChains, createClient } from 'wagmi'

const useWallet = () => {
  const projectId = '1dcdc2bf0fd009aa7bde41002ef945bf'
  const chains = [chain.goerli]

  const { provider } = configureChains(chains, [
    walletConnectProvider({ projectId })
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
