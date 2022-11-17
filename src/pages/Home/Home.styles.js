import styled from 'styled-components'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import Description from '../../components/Description'

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

const Infos = styled.section`
  display: flex;
  justify-content: space-evenly;
  width: calc(100% - 2rem);
  margin-bottom: 4rem;
`

const Data = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;

  & ${Card} {
    margin-bottom: 1rem;
  }
`

const Home = styled.main`
  & > ${Banner} {
    height: 15rem;
    object-fit: cover;
    margin-bottom: 2rem;
  }

  & > ${Description} {
    padding:  0 1rem;
  }
`

export default {
  Home,
  Data,
  Infos,
  Info,
  Label,
  Value
}
