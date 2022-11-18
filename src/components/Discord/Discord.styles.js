import discord from '../../assets/images/discord.svg'
import styled from 'styled-components'

export const Icon = styled.img.attrs({ src: discord, alt: 'Discord' })`
  width: 100%;
`

export const Discord = styled.a.attrs({ href: 'https://discord.gg/UTLTY', target: '_blank' })`
  width: 4rem;
  cursor: var(--cursor-pointer);
`

export default {
  Discord,
  Icon
}
