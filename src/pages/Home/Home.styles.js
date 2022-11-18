import styled from 'styled-components'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import Description from '../../components/Description'

const Team = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 4rem;
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
    margin-bottom: 2rem;
  }
`

export default {
  Home,
  Data,
  Team
}
