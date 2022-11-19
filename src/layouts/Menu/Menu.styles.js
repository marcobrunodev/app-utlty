import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import close from '../../assets/images/icon-close.svg'
import IconMenu from '../../components/IconMenu'

const Social = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-top: 2rem;

  @media (min-width: 640px) {
    display: none;
  }
`

const hasSol = ({ sol }) => sol && css`
  color: var(--color-sol)
  `

const Item = styled(Link)`
  color: var(--color-first-white);
  text-decoration: none;
  font-size: 3rem;
  color: var(--color-ether);
  transition: color 200ms ease-in-out;

  &:hover {
    color: var(--color-first-white);
  }

  ${hasSol};
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

  @media (min-width: 640px) {
    display: none;
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
  z-index: 100;
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: 0.1rem solid var(--color-first);
  transition: transform 200ms ease-in-out;
  transform: translateX(100%);
  gap: 2rem;

  @media (min-width: 640px) {
    position: static;
    transform: translate(0);
    height: auto;
    width: auto;
    background-color: transparent;
    border: none;
    flex-direction: row;
    padding: 0;
  }
  
  ${hasActive};
`

const WrapperMenu = styled.div`
  display: flex;

  @media (min-width: 640px) {
    & ${IconMenu} {
      display: none;
    } 
  }
`

export default { WrapperMenu, Menu, Item, Close, Social }
