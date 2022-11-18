import ConnectWalletEth from './ConnectWalletEth'
import useConnectWalletEth from './useConnectWalletEth'

export default () => {
  const { connectWallet, label } = useConnectWalletEth()

  return <ConnectWalletEth label={label} onClick={connectWallet} />
}
