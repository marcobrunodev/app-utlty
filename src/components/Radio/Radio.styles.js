import styled from 'styled-components'

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  width: 5rem;
  font-size: 2.5rem;
  border: 0.2rem solid var(--color-second-white);
  border-radius: var(--first-radius);
  cursor: var(--cursor-pointer);
  transition: transform 200ms ease-in-out;

  &:hover {
    transform: scale(1.08);
  }
`

const Radio = styled.input.attrs({ type: 'radio' })`
  display: none;

  &:checked + ${Label} {
    border-color: var(--color-first);
  }
`

export default {
  Radio,
  Label
}
