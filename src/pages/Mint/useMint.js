import { useState } from 'react'

const useMint = () => {
  const [network, setNetwork] = useState('ethereum')
  const [price, setPrice] = useState('0.16 eth')
  const [quantity, setQuantity] = useState(2)
  const networks = [{ label: 'Ethereum', value: 'ethereum' }, { label: 'Solana', value: 'solana' }]

  const changeNetwork = (event) => {
    setNetwork(event.target.value)
  }

  return {
    network,
    changeNetwork,
    networks,
    price,
    setPrice,
    quantity,
    setQuantity
  }
}

export default useMint
