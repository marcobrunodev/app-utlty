import styled from 'styled-components'
import Logo from '../../components/Logo'

const MintHeader = styled.header`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  height: var(--size-header);
  padding: 1rem;
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: var(--color-first-black);
  z-index: 5;

  ${Logo} {
    height: 100%;
  }
`

export default {
  MintHeader
}
