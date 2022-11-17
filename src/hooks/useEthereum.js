import Web3 from 'web3'
import abi from '../abi/UTLTY.json'

const { VITE_RPC, VITE_CONTRACT, VITE_NORMAL_MINT_PRICE } = import.meta.env

const useEthereum = () => {
  console.log('VITE_RPC', VITE_RPC)
  const web3 = new Web3(Web3.givenProvider)
  const contract = new web3.eth.Contract(abi, VITE_CONTRACT)

  const toWei = (value) => Web3.utils.toWei(value.toString(), 'ether')

  const getPrice = async () => {
    const price = await contract.methods.normalMintPrice().call()

    console.log('price', Web3.utils.fromWei(price, 'ether'))

    return price
  }

  const getPriceEther = async () => {
    const price = await contract.methods.normalMintPrice().call()

    return Web3.utils.fromWei(price, 'ether')
  }

  const estimateGas = async (action, options) => {
    const gas = await action
      .estimateGas(options)
      .then(e => e)
      .catch(e => {
        console.log(e)
      })

    console.log('gas', gas)

    options = { ...options, gas: parseInt(1.2 * gas) }

    console.log('options', options)

    action.send(options).on('transactionHash', hash => {
      console.log('hash', hash)
    }).on('confirmation', (confirmationNumber, receipt) => {
      console.log('confirmationNumber', confirmationNumber)
      console.log('receipt', receipt)
    }).on('receipt', receipt => {
      console.log('receipt', receipt)
    }).on('error', error => {
      console.log('error here', error)
    })
  }

  const mint = (quantity, adress) => {
    const value = toWei(+VITE_NORMAL_MINT_PRICE * quantity)
    const options = {
      from: adress,
      value
    }

    console.log('methods', contract.methods)

    const action = contract.methods.mint(quantity)

    console.log('action', action)

    return estimateGas(action, options)
  }

  return { mint, getPrice, getPriceEther }
}

export default useEthereum
