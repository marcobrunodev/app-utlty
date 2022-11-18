import styled from 'styled-components'
import twitter from '../../assets/images/twitter.svg'

export const Icon = styled.img.attrs({ src: twitter, alt: 'Twitter' })`
  width: 100%;
`

export const Twitter = styled.a.attrs({ href: 'https://twitter.com/UTLTY_NFT', target: '_blank' })`
  width: 4rem;
  cursor: var(--cursor-pointer);
`

export default {
  Twitter,
  Icon
}
