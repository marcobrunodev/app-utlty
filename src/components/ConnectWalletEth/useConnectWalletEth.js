import { useWeb3Modal } from '@web3modal/react'
import { useEffect, useState } from 'react'
import { useAccount, useDisconnect } from 'wagmi'

const useConnectWalletEth = () => {
  const [label, setLabel] = useState('Connect Wallet')
  const { open } = useWeb3Modal()
  const { isConnected, address } = useAccount()
  const { disconnect } = useDisconnect()

  const shortAddress = () => {
    const first = address.match(/^[a-zA-Z0-9]{5}/)
    const end = address.match(/[a-zA-Z0-9]{5}$/)

    return `${first}...${end}`
  }

  useEffect(() => {
    console.log('address', address)

    if (isConnected) {
      setLabel(shortAddress())
    } else {
      setLabel('Connect Wallet')
    }
  }, [address])

  const connectWallet = (event) => {
    event.preventDefault()
    console.log('click here')

    if (!isConnected) {
      open()
    } else {
      disconnect()
    }
  }

  return {
    connectWallet,
    label
  }
}

export default useConnectWalletEth
