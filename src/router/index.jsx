import { createBrowserRouter } from 'react-router-dom'
import Wallet from '../pages/Wallet'
import Home from '../pages/Home'
import Mint from '../pages/Mint'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Wallet />,
    children: [{
      path: '',
      element: <Home />
    }, {
      path: 'mint',
      element: <Mint />
    }]
  }
])

export default router
