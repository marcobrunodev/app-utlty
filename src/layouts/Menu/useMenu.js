import { useWeb3Modal } from '@web3modal/react'
import { useState } from 'react'

const useMenu = () => {
  const [active, setActive] = useState(false)
  const { open } = useWeb3Modal()
  const items = [
    { label: 'Mint', to: '/mint' }
  ]

  const toggle = () => {
    setActive(!active)
  }

  const connectWallet = (event) => {
    event.preventDefault()

    if (!isConnected) {
      open()
    } else {
      disconnect()
    }
  }

  return {
    items,
    toggle,
    active
  }
}

export default useMenu
