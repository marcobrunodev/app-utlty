import { useEffect, useState } from 'react'
import { useWeb3Modal } from '@web3modal/react'
import { useAccount, useDisconnect } from 'wagmi'
import useEthereum from '../../hooks/useEthereum'

const useMintEthereum = ({ setPrice, setQuantity, quantity, network }) => {
  const [activeMint, setActiveMint] = useState(false)
  const [labelConnectWallet, setLabelConnectWallet] = useState('Connect Wallet')
  const { open } = useWeb3Modal()
  const { address, isConnected } = useAccount()
  const { disconnect } = useDisconnect()
  const [defaultPrice, setDefaultPrice] = useState('-.---')
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

  const shortAddress = () => {
    const first = address.match(/^[a-zA-Z0-9]{5}/)
    const end = address.match(/[a-zA-Z0-9]{5}$/)

    return `${first}...${end}`
  }

  useEffect(() => {
    if (network === 'ethereum') {
      setPrice(`${defaultPrice} eth`)
      setQuantity(2)
    }
  }, [network, defaultPrice])

  useEffect(() => {
    if (isConnected) {
      setLabelConnectWallet(shortAddress())
      setActiveMint(true)
    } else {
      setLabelConnectWallet('Connect Wallet')
      setActiveMint(false)
    }
  }, [address])

  const connectWallet = (event) => {
    event.preventDefault()

    if (!isConnected) {
      open()
    } else {
      disconnect()
    }
  }

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
