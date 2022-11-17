import styled, { css } from 'styled-components'

const hasCenter = ({ center }) => center && css`
  margin-left: auto;
  margin-right: auto;
`

const Card = styled.img`
  border: 0.2rem solid var(--color-first);
  border-radius: 0.2rem;
  width: calc(100% - 2rem);
  border-radius: 1rem;

  ${hasCenter};
`

export default Card
