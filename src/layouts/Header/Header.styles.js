import styled from 'styled-components'
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

  & > ${Logo} {
    height: 100%;
  }

  & > ${IconMenu} {
    margin-right: 0.5rem;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    height: 0.1rem;
    width: calc(100% - 2rem);
    min-width: 30rem;
    background-color: var(--color-first-white);
  }
`

export default { Header }
