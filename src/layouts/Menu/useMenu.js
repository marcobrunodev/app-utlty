import { useState } from 'react'

const useMenu = () => {
  const [active, setActive] = useState(false)
  const items = [
    { label: 'Mint ETH', to: '/mint' },
    { label: 'Mint SOL', as: 'a', href: 'https://solmint.utlty.us', sol: true }
  ]

  const toggle = () => {
    setActive(!active)
  }

  return {
    items,
    toggle,
    active
  }
}

export default useMenu
