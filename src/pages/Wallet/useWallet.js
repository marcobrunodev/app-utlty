import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider
} from '@web3modal/ethereum'

import { chain, configureChains, createClient } from 'wagmi'

const useWallet = () => {
  const projectId = '3673966425918615498b49e794b6aea4'
  const chains = [chain.goerli]

  console.log('projectId', projectId)

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
