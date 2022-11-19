import { Outlet } from 'react-router-dom'
import { Web3Modal } from '@web3modal/react'
import useWallet from './useWallet'
import { WagmiConfig } from 'wagmi'

const Wallet = () => {
  const { wagmiClient, ethereumClient } = useWallet()

  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <Outlet />
      </WagmiConfig>

      <Web3Modal
          projectId="1dcdc2bf0fd009aa7bde41002ef945bf"
          theme="dark"
          accentColor="default"
          ethereumClient={ethereumClient}
        />
    </>
  )
}

export default Wallet
