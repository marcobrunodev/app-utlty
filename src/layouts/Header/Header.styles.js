import styled from 'styled-components'
import { ConnectWalletEth } from '../../components/ConnectWalletEth/ConnectWalletEth.styles'
import IconMenu from '../../components/IconMenu'
import Logo from '../../components/Logo'

const Header = styled.header`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  height: var(--size-header);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-first-black);

  & > ${Logo} {
    height: 100%;
  }

  & > ${IconMenu} {
    margin-right: 0.5rem;
  }

  & ${ConnectWalletEth} {
    box-sizing: border-box;
    font-size: 2rem;
    padding: 0.8rem;

    & > img {
      height: 0.7em;
    }
  }

  @media (min-width: 960px) {
    & ${ConnectWalletEth} {
      font-size: 3rem;
    }
  }
`

export default { Header }
