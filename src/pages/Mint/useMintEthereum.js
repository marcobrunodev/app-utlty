import { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'
import useEthereum from '../../hooks/useEthereum'

const useMintEthereum = ({ setPrice, setQuantity, quantity, network }) => {
  const [activeMint, setActiveMint] = useState(false)
  const labelConnectWallet = useState('Connect Wallet')
  const { address, isConnected } = useAccount()
  const [defaultPrice, setDefaultPrice] = useState(0.16)
  const { getPriceEther, mint } = useEthereum()
  const [currentQuantity, setCurrentQuantity] = useState(1)

  useEffect(() => {
    if (network === 'ethereum') {
      const getPrice = async () => {
        const price = await getPriceEther()
        setDefaultPrice(price)
      }

      getPrice()
    }
  }, [])

  useEffect(() => {
    if (network === 'ethereum') {
      setPrice(`${defaultPrice} eth`)
      setQuantity(2)
    }
  }, [network, defaultPrice])

  useEffect(() => {
    if (isConnected) {
      setActiveMint(true)
    } else {
      setActiveMint(false)
    }
  }, [address])

  const connectWallet = () => {}

  const changeQuantity = (event) => {
    const qtt = event.target.value

    setCurrentQuantity(qtt)
    setPrice(`${defaultPrice * qtt} eth`)
  }

  const makeMint = async (event) => {
    event.preventDefault()

    mint(currentQuantity, address)
  }

  return {
    activeMint,
    connectWallet,
    labelConnectWallet,
    changeQuantity,
    makeMint
  }
}

export default useMintEthereum
