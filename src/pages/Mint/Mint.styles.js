import styled, { css } from 'styled-components'
import Banner from '../../components/Banner'

const Quanties = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
`

const hasActive = ({ active }) => active && css`
  opacity: 1;
`

const WrapperMint = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.3;
  transition: opacity 200ms ease-in-out, filter 200ms ease-in-out;

  ${hasActive};
`

const Mint = styled.main`
  padding-bottom: 2rem;

  & > ${Banner} {
    margin-bottom: 1rem;
  }
`

export default { Mint, WrapperMint, Quanties }
