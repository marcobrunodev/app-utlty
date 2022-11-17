import styled from 'styled-components'

const Value = styled.p`
  color: var(--color-first-white);
  font-size: 2.8rem;
`

const Label = styled.h2`
  color: var(--color-first);
  font-size: 3rem;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
`

const MintInfos = styled.section`
  display: flex;
  justify-content: space-evenly;
  width: calc(100% - 2rem);
  margin-bottom: 4rem;
`

export default {
  MintInfos,
  Info,
  Label,
  Value
}
