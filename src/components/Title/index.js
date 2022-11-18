import styled, { css } from 'styled-components'

const hasCenter = ({ center }) => center && css`
  text-align: center;
`

const Title = styled.h1`
  font-size: 3rem;

  @media (min-width: 640px) {
    font-size: 5rem;
  }
  ${hasCenter};
`

export default Title
