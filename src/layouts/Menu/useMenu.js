import { useState } from 'react'

const useMenu = () => {
  const [active, setActive] = useState(false)
  const items = [
    { label: 'Mint', to: '/mint' }
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
