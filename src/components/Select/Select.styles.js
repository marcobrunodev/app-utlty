import styled from 'styled-components'

const Option = styled.option`
  cursor: var(--cursor-auto);
`

export const Select = styled.select`
  box-sizing: border-box;
  border: 0.2rem solid var(--color-first);
  background-color: var(--color-first-black);
  color: var(--color-first-white);
  border-radius: var(--first-radius);
  font-size: 1.6rem;
  min-width: 20rem;
  padding: 1rem 0.5rem;
  cursor: var(--cursor-pointer);
`

export default {
  Select,
  Option
}
