import { arrayOf, shape, string, bool, func, number } from 'prop-types'
import banner from '../../assets/images/mint-banner.png'
import Banner from '../../components/Banner'
import Button from '../../components/Button'
import Form from '../../components/Form'
import Label from '../../components/Label'
import Line from '../../components/Line'
import Radio from '../../components/Radio'
import Select from '../../components/Select'
import MintHeader from '../../layouts/MintHeader'
import S from './Mint.styles'
import ConnectWalletEth from '../../components/ConnectWalletEth'

const Mint = ({ networks, activeMint, changeNetwork, network, connectWallet, labelConnectWallet, price, quantity, changeQuantity, makeMint }) => (
  <S.Mint>
    <MintHeader />

    <Banner src={banner} />

    <Form column center>
      <ConnectWalletEth active={network === 'ethereum'} />

      <Button active={network === 'solana'} second onClick={connectWallet}>
        {labelConnectWallet}
      </Button>

      <Line />

      <S.WrapperMint active={activeMint}>
        <Label>Quantity</Label>

        <S.Quanties>
          {Array(quantity).fill().map((_, index) => (
            index === 0
              ? <Radio onClick={changeQuantity} name="quantity" value={index + 1} label={index + 1} defaultChecked={true} />
              : <Radio onClick={changeQuantity} name="quantity" value={index + 1} label={index + 1} />
          ))}

        </S.Quanties>

        <Label>{price}</Label>
        <Button onClick={makeMint}>Mint now</Button>
      </S.WrapperMint>
    </Form>
  </S.Mint>
)

Mint.propTypes = {
  networks: arrayOf(shape({
    label: string.isRequired,
    value: string.isRequired
  })).isRequired,
  activeMint: bool.isRequired,
  changeNetwork: func.isRequired,
  network: string.isRequired,
  connectWallet: func.isRequired,
  labelConnectWallet: string.isRequired,
  price: string.isRequired,
  quantity: number.isRequired,
  changeQuantity: func.isRequired,
  makeMint: func.isRequired
}

export default Mint
