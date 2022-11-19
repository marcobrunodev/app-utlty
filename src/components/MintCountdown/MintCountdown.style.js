import styled from 'styled-components'
import Subtitle from '../Subtitle'

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`

const Caption = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
`

const Time = styled.span`
  --border: 0.2rem solid var(--color-first);

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  border: var(--border);
  border-radius: 1rem;
  width: 5rem;
  height: 6rem;
  font-family: 'Space Mono', monospace;
  color: var(--color-first-white);
  background-color: var(--color-first-black);
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
`

const Slot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`

const Clock = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`

const MintCountdown = styled.section`
  --border: 0.2rem solid var(--color-first-white);

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-first);
  color: var(--color-first-black);
  padding: 2rem 0;
  border-top: var(--border);
  border-bottom: var(--border);
  margin-bottom: 2rem;

  & > ${Subtitle} {
    margin-bottom: 2rem;
  }
`

export default { MintCountdown, Clock, Slot, Time, Caption, Buttons }
