import styled, { css } from 'styled-components'
import Label from '../Label'
import Line from '../Line'
import { Select } from '../Select/Select.styles'

const hasColumn = ({ column }) => column && css`
  flex-direction: column;
`

const hasCenter = ({ center }) => center && css`
  align-items: center;
`

const Form = styled.form`
  display: flex;

  & ${Label} {
    margin-bottom: 1rem;
  }

  & ${Select} {
    margin-bottom: 1rem;
  }

  & ${Line} {
    margin-top: 2rem;
    margin-bottom: 1rem;
    max-width: 600px;
  }
  
  ${hasColumn};
  ${hasCenter};
`

export default Form
