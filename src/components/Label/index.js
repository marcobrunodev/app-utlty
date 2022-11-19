import styled, { css } from 'styled-components'

const hasCenter = ({ center }) => center && css`
  text-align: center;
`

const Label = styled.label`
  font-size: 2.5rem;
  letter-spacing: 0.1rem;

  ${hasCenter};
`

export default Label
