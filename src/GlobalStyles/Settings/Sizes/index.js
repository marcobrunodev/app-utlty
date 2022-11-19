import { createGlobalStyle } from 'styled-components'

const Sizes = createGlobalStyle`
  :root {
    --size-header: 5rem;
    --size-button-fixed: 4rem;

    @media (min-width: 960px) {
      --size-header: 7rem;
    }
  }
`

export default Sizes
