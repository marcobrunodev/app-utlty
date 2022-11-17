import styled from 'styled-components'

const Banner = styled.img`
  --border: 0.2rem solid var(--color-first);

  width: 100vw;
  border-top: var(--border);
  border-bottom: var(--border);
  filter: drop-shadow(4px 4px 4px #000000);

  @media(min-width: 760px) {
    height: 45rem;
    object-fit: cover;
  }
`

export default Banner
