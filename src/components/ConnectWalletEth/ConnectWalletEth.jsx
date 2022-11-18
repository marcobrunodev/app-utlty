import { string } from 'prop-types'
import IconConnectWallet from '../IconConnectWallet'
import S from './ConnectWalletEth.styles'

const ConnectWalletEth = (props) => (
  <S.ConnectWalletEth {...props} second>
    <IconConnectWallet />
    {props.label}
  </S.ConnectWalletEth>
)

ConnectWalletEth.propTypes = {
  label: string.isRequired
}

export default ConnectWalletEth
