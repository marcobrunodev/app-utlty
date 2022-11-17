import { Outlet } from 'react-router-dom'
import { Web3Modal } from '@web3modal/react'
import useWallet from './useWallet'
import { WagmiConfig } from 'wagmi'

const { VITE_PRUBLIC_PROJECT_ID } = import.meta.env

const Wallet = () => {
  const { wagmiClient, ethereumClient } = useWallet()

  return (
  <>
    <WagmiConfig client={wagmiClient}>
      <Outlet />
    </WagmiConfig>

    <Web3Modal
        projectId={VITE_PRUBLIC_PROJECT_ID}
        theme="dark"
        accentColor="default"
        ethereumClient={ethereumClient}
      />
  </>
  )
}

export default Wallet
