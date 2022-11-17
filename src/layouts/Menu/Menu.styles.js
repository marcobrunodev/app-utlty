import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import close from '../../assets/images/icon-close.svg'

const Item = styled(Link)`
  color: var(--color-first-white);
  text-decoration: none;
  font-size: 3rem;
`

const Close = styled.img.attrs({ src: close })`
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  height: 3rem;
  cursor: var(--cursor-pointer);
  transition: transform 200ms ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`

const hasActive = ({ active }) => active && css`
  transform: translateX(0);
`

const Menu = styled.menu`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--color-first-black);
  z-index: 10;
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: 0.1rem solid var(--color-first);
  transition: transform 200ms ease-in-out;
  transform: translateX(100%);
  
  ${hasActive};
`

export default { Menu, Item, Close }
