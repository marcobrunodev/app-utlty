import { useEffect } from 'react'

const useMintSolana = ({ setPrice, setQuantity, quantity, network }) => {
  const labelConnectWallet = 'Connect Wallet'
  const activeMint = false
  const price = 2.5

  useEffect(() => {
    if (network === 'solana') {
      setPrice(`${price} sol`)
      setQuantity(5)
    }
  }, [network])

  const connectWallet = (event) => {
    event.preventDefault()
    console.log('connectWallet')
  }

  const changeQuantity = (event) => {
    const quanity = event.target.value

    setPrice(`${price * quanity} sol`)
  }

  const makeMint = (event) => {
    event.preventDefault()
    console.log('mint')
  }

  return {
    activeMint,
    connectWallet,
    labelConnectWallet,
    changeQuantity,
    makeMint
  }
}

export default useMintSolana
