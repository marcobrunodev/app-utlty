import ConnectWalletEth from './ConnectWalletEth'
import useConnectWalletEth from './useConnectWalletEth'

export default (props) => {
  const { connectWallet, label } = useConnectWalletEth()

  return <ConnectWalletEth {...props} label={label} onClick={connectWallet} />
}
