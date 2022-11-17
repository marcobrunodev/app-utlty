import styled, { css } from 'styled-components'

const hasSecond = ({ second }) => second && css`
  background-color: var(--color-second-white);
`

const hasCenter = ({ center }) => center && css`
  margin-left: auto;
  margin-right: auto;
`

const Line = styled.div`
  background-color: var(--color-first);
  height: 0.2rem;
  border-radius: 0.1rem;
  width: calc(100% - 2rem);

  ${hasSecond};
  ${hasCenter};
`

export default Line
