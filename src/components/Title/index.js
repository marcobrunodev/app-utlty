import styled, { css } from 'styled-components'

const hasCenter = ({ center }) => center && css`
  text-align: center;
`

const Title = styled.h1`
  font-size: 3rem;

  ${hasCenter};
`

export default Title
