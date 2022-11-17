import {
  EthereumClient,
  modalConnectors
} from '@web3modal/ethereum'
import { chain, createClient } from 'wagmi'

const useWallet = () => {
  const chains = [chain.goerli]

  const wagmiClient = createClient({
    autoConnect: true,
    connectors: modalConnectors({ appName: 'web3Moda', chains })
  })

  const ethereumClient = new EthereumClient(wagmiClient, chains)

  return { ethereumClient, wagmiClient }
}

export default useWallet
