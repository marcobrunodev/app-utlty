import Mint from './Mint'
import useMint from './useMint'
import useMintEthereum from './useMintEthereum'
import useMintSolana from './useMintSolana'

export default () => {
  const { networks, network, changeNetwork, price, setPrice, quantity, setQuantity } = useMint()
  const ethereum = useMintEthereum({ setPrice, setQuantity, quantity, network })
  const solana = useMintSolana({ setPrice, setQuantity, quantity, network })

  const { activeMint, connectWallet, labelConnectWallet, changeQuantity, makeMint } = network === 'ethereum' ? ethereum : solana

  return <Mint
          networks={networks}
          network={network}
          changeNetwork={changeNetwork}
          connectWallet={connectWallet}
          activeMint={activeMint}
          labelConnectWallet={labelConnectWallet}
          changeQuantity={changeQuantity}
          price={price}
          quantity={quantity}
          makeMint={makeMint}
        />
}
