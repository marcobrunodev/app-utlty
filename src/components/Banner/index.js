import styled from 'styled-components'

const Banner = styled.img`
  --border: 0.2rem solid var(--color-first);

  width: 100vw;
  border-top: var(--border);
  border-bottom: var(--border);
  filter: drop-shadow(4px 4px 4px #000000);
  position: relative;
  object-fit: cover;
  z-index: -1;
  height: 15rem;

  @media (min-width: 470px) {
    height: 20rem;
  }

  @media (min-width: 620px) {
    height: 25rem;
  }

  @media(min-width: 960px) {
    height: 45rem;
    object-fit: cover;
  }
`

export default Banner
