import { createGlobalStyle } from 'styled-components'

const Base = createGlobalStyle`
  :root {
    font-size: 10px;

    @media (min-width: 960px) {
      font-size: 15px;
    }
  }


  *::selection {
    background-color: var(--color-first);
    color: var(--color-first-black);
  }

  html {
    cursor: var(--cursor-auto);
    height: 100%;
  }

  body {
    padding-top: var(--size-header);
    color: var(--color-first-white);
    background-color: var(--color-first-black);
    font-family: 'Fresca', sans-serif;
    font-size: 1rem;
    min-width: 32rem;
  }
`

export default Base
