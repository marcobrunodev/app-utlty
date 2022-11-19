import styled from 'styled-components'
import menu from '../../assets/images/menu.svg'

const IconMenu = styled.img.attrs({ src: menu })`
  cursor: var(--cursor-pointer);
  transition: transform 200ms ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`

export default IconMenu
