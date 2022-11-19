import styled, { css } from 'styled-components'

const hasFixed = ({ fixed }) => fixed && css`
  position: fixed;
  bottom: 0;
  left: 0;
  border-radius: 0;
  width: 100vw;
  height: var(--size-button-fixed);
`

const hasSecond = ({ second }) => second && css`
  background-color: var(--color-first-black);
  color: var(--color-first);
  border: 0.2rem solid var(--color-first);
`

const hasActive = ({ active = true }) => active && css`
  display: flex;
`

const Button = styled.button`
  display: none;
  align-items: center;
  gap: 1rem;
  box-sizing: border-box;
  background-color: var(--color-first);
  color: var(--color-first-black);
  border-radius: var(--first-radius);
  font-size: 3rem;
  padding: 1rem 2rem;
  cursor: var(--cursor-pointer);
  transition: transform 0.2s ease-in-out;
  max-width: 30rem;
  text-decoration: none;

  & > img {
    height: 1em;
  }

  &:hover {
    transform: scale(1.05);
  }

  ${hasSecond};
  ${hasFixed};
  ${hasActive};
`

export default Button
